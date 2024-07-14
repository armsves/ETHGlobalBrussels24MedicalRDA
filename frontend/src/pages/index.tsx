import { ConnectButton, connectorsForWallets, } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAccount, useWriteContract, useReadContract, useWaitForTransactionReceipt } from 'wagmi';
import { Address } from 'viem'
import { initialize, getKeyringFromSeed } from 'avail-js-sdk';
import { AES, enc } from 'crypto-js';
import config from '../config/config';
import React, { useState } from 'react';
import Image from 'next/image'
import { abi, wagmiContractConfig } from './abi.ts'
import { NextResponse } from 'next/server';


function DisplayVerification (params: { patientAddress2: Address}) {
  const { data: dataHash } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'reportHash',
    args: [params.patientAddress2],
  })

  const safePatientAddress2 = params.patientAddress2 ?? '0x0000000000000000000000000000000000000000';
  const safeDataHash = dataHash ?? '0x0000000000000000000000000000000000000000';

  const { data: response } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'verifyPatientRecord',
    args: [safePatientAddress2, safeDataHash],
  })
  //setVerificationResponse(response as boolean);

  return (
    <div>
      <div>Verification Response: {response}</div>
    </div>
  )
}

const Home: NextPage = () => {
  const { address } = useAccount();
  const aesKey = '6a7323282017908dc895116981c04ed65e496786';
  const secretKey = '6a7323282017908dc895116981c04ed65e496786';
  const [txHash, setTxHash] = useState('');
  const [blockHash, setBlockHash] = useState('');
  const [medicalData, setMedicalData] = useState<File[] | null>(null);
  const [decryptedData, setDecryptedData] = useState('');
  type EthereumAddress = `0x${string}`;
  const { data: hash, writeContract } = useWriteContract();
  const [verificationResponse, setVerificationResponse] = useState(false);
  const [buttonVerify, setButtonVerify] = useState(false);

  const [patientAddress, setPatientAddress] = useState<EthereumAddress>('0x0000000000000000000000000000000000000000');
  const [patientAddress2, setPatientAddress2] = useState<EthereumAddress>('0x0000000000000000000000000000000000000000');

  const [isLoading, setIsLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [encryptedData, setEncryptedData] = useState<string>('');

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const base64ToBlob = (base64: string, type = 'application/pdf'): Blob => {
    const binaryString = window.atob(base64.split(',')[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type });
  };

  const handleButtonClick = async () => {
    const file = medicalData && medicalData.length > 0 ? medicalData[0] : null;
    console.log('file', file);
    if (file) {
      const base64 = await blobToBase64(file);
      const encrypted = await AES.encrypt(base64, secretKey).toString();
      setEncryptedData(encrypted);
      console.log('File encrypted and stored', encryptedData);
    }

    if (!encryptedData) {
      alert('No encrypted data found');
      return;
    }
    setIsLoading(true);
    try {
      setTxHash('');
      setBlockHash('');
      setPdfUrl('');
      setDecryptedData('');
      const [txHash, blockHash] = await sendToAvail(encryptedData);
      setIsLoading(false);
      console.log('txHash', txHash);
      console.log('blockHash', blockHash);
    } catch (error) {
      // Handle the error
      setIsLoading(false);
      console.error('Encryption or sending failed', error);
    }
  }

  const sendToAvail = async (encryptedDocument: string) => {
    console.log(`Sending ${encryptedDocument} to Avail`);
    const api = await initialize(config.endpoint);
    const account = getKeyringFromSeed(config.seed);
    //console.log('account', account);
    const appId = config.appId === 0 ? 1 : config.appId;
    const options = { app_id: appId, nonce: -1 };

    const txResult = (await new Promise((res) => {
      api.tx.dataAvailability
        .submitData(encryptedDocument)
        .signAndSend(account, options, (result) => {
          console.log(`Tx status: ${result.status}`);
          if (result.isFinalized || result.isError) {
            res(result);
          }
        });
    })) as any;

    console.log('Done Sending to Avail');

    if (txResult.isError) {
      console.log(`Transaction was not executed`);
    }

    const [txHash, blockHash] = [txResult.txHash, txResult.status.asFinalized];
    console.log(`Tx Hash: ${txHash}, Block Hash: ${blockHash}`);

    setTxHash(txHash);
    setBlockHash(blockHash);
    console.log('txHash set', txHash);
    console.log('blockHash set', blockHash);

    return [txHash, blockHash];
  };

  const handleButtonClickRetrieve = async () => {
    const response = await retrieveFromAvail(txHash, blockHash);
    setDecryptedData(response || '');
  };

  const retrieveFromAvail = async (txHash: string, blockHash: string) => {
    // Initialize the Avail API and retrieve the account from seed
    console.log('txHash ret', txHash.toString());
    console.log('blockHash ret', typeof blockHash);
    const api = await initialize(config.endpoint);
    const account = getKeyringFromSeed(config.seed);
    console.log('Account initialized:', account);

    // Log transaction details
    console.log(`Transaction Hash: ${txHash}, Block Hash: ${blockHash}`);

    // Fetch the block using the block hash
    const block = await api.rpc.chain.getBlock(blockHash.toString());
    console.log('Block details:', block);

    // Find the specific transaction in the block's extrinsics
    const tx = block.block.extrinsics.find((extrinsic) => extrinsic.hash.toHex() === txHash.toString());
    console.log('Transaction details:', tx);

    if (!tx) {
      console.error('Failed to find the Submit Data transaction');
    } else {
      const dataAsString = new TextDecoder().decode(new Uint8Array(tx.data));
      console.log('Decoded data:', dataAsString);
      const dataHex = tx.method.args.map((arg) => arg.toString()).join(', ');
      let decodedString = '';
      for (let n = 0; n < dataHex.length; n += 2) {
        decodedString += String.fromCharCode(parseInt(dataHex.substring(n, n + 2), 16));
      }
      console.log(`Submitted data: ${decodedString}`);

      let encryptedDocContent = decodedString.replace(/^\x00+/, '');

      const decrypted = await AES.decrypt(encryptedDocContent, secretKey);
      const base64 = await decrypted.toString(enc.Utf8);
      const decryptedBlob = await base64ToBlob(base64);

      const pdfUrl = await URL.createObjectURL(decryptedBlob);
      setPdfUrl(pdfUrl);
      const decryptedContent = "decripted";
      return decryptedContent;
    }
  };

  const executeFunction = async () => {
    console.log('Store Function executed!');

    const response = await writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'storePatientData',
      args: [patientAddress, encryptedData],
    })

    console.log('Response:', await response);

  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  const handleButtonVerify = async () => {
    console.log('Verify Function executed!');
    setButtonVerify(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Medical Records DA</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <Image src={`/assets/availbiglogo.png`} alt="Avail Logo" width="34" height="34" />
            Medical Records DA
          </h1>
          <ConnectButton />
        </div>



        <div>
          <div className="medicalForm">
            <input
              className={styles.medicalInput}
              type="text"
              value={patientAddress}
              onChange={(e) => {
                const value = e.target.value;
                if (value.startsWith('0x') || value === '') {
                  setPatientAddress(value as `0x${string}`);
                } else {
                  // Optionally, show some error or feedback to the user indicating the expected format
                  console.error("Address must start with '0x'.");
                }
              }}
              placeholder="Patient Address"
            />
            <input
              className={styles.medicalInput}
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setMedicalData([e.target.files[0]]);
                }
              }}
              placeholder="Upload Sensitive Medical Data"
            />
            <button className={`${styles.medicalButton} ${styles.storeButton}`} onClick={executeFunction}>Execute Function</button>
          </div>
          </div>

          {
  /*

          <div className="medicalForm">
            <input
              className={styles.medicalInput}
              type="text"
              value={patientAddress2}
              onChange={(e) => {
                const value = e.target.value;
                if (value.startsWith('0x') || value === '') {
                  setPatientAddress2(value as `0x${string}`);
                } else {
                  // Optionally, show some error or feedback to the user indicating the expected format
                  console.error("Address must start with '0x'.");
                }
              }}
              placeholder="Patient Address"
            />
            <button className={`${styles.medicalButton} ${styles.retrieveButton}`} onClick={handleButtonVerify}>Verify Report</button>
          </div>
        </div>


        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}

        {buttonVerify && ( <><DisplayVerification patientAddress2={patientAddress2}/></>)}
  */
}
        {
          /*
          address && (
            <>
              <div className="container">
                <div className="medicalForm">
                  <input
                    className={styles.medicalInput}
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setMedicalData([e.target.files[0]]);
                      }
                    }}
                    placeholder="Upload Sensitive Medical Data"
                  />

                  <button className={`${styles.medicalButton} ${styles.storeButton}`} onClick={handleButtonClick}>Store PDF File</button>
                </div>

                <div className="medicalForm">
                  <input
                    className={styles.medicalInput}
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    placeholder="Transaction Hash"
                  />
                  <input
                    className={styles.medicalInput}
                    type="text"
                    value={blockHash}
                    onChange={(e) => setBlockHash(e.target.value)}
                    placeholder="Block Hash"
                  />
                  <button className={`${styles.medicalButton} ${styles.retrieveButton}`} onClick={handleButtonClickRetrieve}>Retrieve Data</button>
                </div>
              </div>
            </>
          )
            */
        }

        {
          isLoading && (
            <div className={styles.fullScreenCenter}>
              <div className={styles.loader}>
                Sending data...
                <div className={styles.animation}></div>
              </div>
            </div>
          )
        }

        {
          decryptedData && pdfUrl && (
            <div className={styles.medicalData}>
              <h2 className={styles.title}>Decrypted Sensitive Medical Data</h2>
              <a href={pdfUrl} download="downloadedDocument.pdf" className={`${styles.medicalButton} ${styles.retrieveButton}`} >Download PDF</a>
            </div>
          )
        }
      </main >

      <footer className={styles.footer}>
        Powered by
        <Image src={`/assets/availDA.svg`} alt="AvailDA Logo" width="64" height="64" className={styles.imageStyle} />
        and
        <Image src={`/assets/orbit.svg`} alt="Orbit Logo" width="64" height="64" className={styles.imageStyle} />
      </footer>
    </div >
  );
};

export default Home;
