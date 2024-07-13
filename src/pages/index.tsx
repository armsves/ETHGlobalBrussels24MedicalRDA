import { ConnectButton, } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAccount } from 'wagmi';
import { initialize, getKeyringFromSeed } from 'avail-js-sdk';
import CryptoJS from 'crypto-js';
import config from '../config/config';
import React, { useState } from 'react';
import Image from 'next/image'

const Home: NextPage = () => {
  const { address } = useAccount();
  const aesKey = '6a7323282017908dc895116981c04ed65e496786';
  const [txHash, setTxHash] = useState('');
  const [blockHash, setBlockHash] = useState('');
  const [medicalData, setMedicalData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const aesEncrypt = (documentContent: string, secretKey: string) => {
    var ciphertext = CryptoJS.AES.encrypt(documentContent, secretKey).toString();
    console.log('ciphertext', ciphertext);
    return ciphertext;
  };

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

    // Rejected Transaction handling
    if (txResult.isError) {
      console.log(`Transaction was not executed`);
    }

    const [txHash, blockHash] = [txResult.txHash, txResult.status.asFinalized];
    console.log(`Tx Hash: ${txHash}, Block Hash: ${blockHash}`);

    setTxHash(txHash);
    setBlockHash(blockHash);

    return [txHash, blockHash];
  };

  const handleButtonClick = async () => {
    setIsLoading(true); // Start loading
    const documentContent = medicalData;
    //const aesKey = CryptoJS.lib.WordArray.random(20).toString();
    console.log('aesKey', aesKey);
    const encryptedDocument = aesEncrypt(documentContent, aesKey);
    console.log('encryptedDocument', encryptedDocument);
    try {
      setTxHash('');
      setBlockHash('');
      setMedicalData('');
      setDecryptedData('');
      const [txHash, blockHash] = await sendToAvail(encryptedDocument);
      console.log('txHash', txHash);
      console.log('blockHash', blockHash);
    } catch (error) {
      console.error('Error storing document:', error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleButtonClickRetrieve = async () => {
    const response = await retrieveFromAvail(txHash, blockHash);
    setDecryptedData(response || '');
  };

  const retrieveFromAvail = async (txHash: string, blockHash: string) => {
    // Initialize the Avail API and retrieve the account from seed
    const api = await initialize(config.endpoint);
    const account = getKeyringFromSeed(config.seed);
    console.log('Account initialized:', account);

    // Log transaction details
    console.log(`Transaction Hash: ${txHash}, Block Hash: ${blockHash}`);

    // Fetch the block using the block hash
    const block = await api.rpc.chain.getBlock(blockHash);
    console.log('Block details:', block);

    // Find the specific transaction in the block's extrinsics
    const tx = block.block.extrinsics.find((extrinsic) => extrinsic.hash.toHex() === txHash);
    console.log('Transaction details:', tx);

    // Handle case where transaction is not found
    if (!tx) {
      console.error('Failed to find the Submit Data transaction');
      //process.exit(1);
    } else {


      // Decode the data from the transaction
      const dataAsString = new TextDecoder().decode(new Uint8Array(tx.data));
      console.log('Decoded data:', dataAsString);

      // Convert the tran saction method arguments from hex to string
      const dataHex = tx.method.args.map((arg) => arg.toString()).join(', ');
      let decodedString = '';
      for (let n = 0; n < dataHex.length; n += 2) {
        decodedString += String.fromCharCode(parseInt(dataHex.substring(n, n + 2), 16));
      }
      console.log(`Submitted data: ${decodedString}`);

      let encryptedDocContent = decodedString.replace(/^\x00+/, '');
      console.log('Cleaned encryptedDocContent:', encryptedDocContent);
      const decryptedContent = CryptoJS.AES.decrypt(encryptedDocContent, aesKey).toString(
        CryptoJS.enc.Utf8
      );
      console.log('Decrypted Content:', decryptedContent);
      return decryptedContent;
    }


  };

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

        {address && (
          <>
            <div className="container">
              <div className="medicalForm">
                <input
                  className={styles.medicalInput}
                  type="text"
                  value={medicalData}
                  onChange={(e) => setMedicalData(e.target.value)}
                  placeholder="Sensitive Medical Data"
                />
                <button className={`${styles.medicalButton} ${styles.storeButton}`} onClick={handleButtonClick}>Store Data</button>
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
        )}

        {isLoading && (
          <div className={styles.fullScreenCenter}>
            <div className={styles.loader}>
              Sending data...
              <div className={styles.animation}></div>
            </div>
          </div>
        )}

        {decryptedData && (
          <div className={styles.medicalData}>
            <h2 className={styles.title}>Decrypted Sensitive Medical Data</h2>
            <p className={styles.description}>{decryptedData}</p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        Powered by
        <Image src={`/assets/availDA.svg`} alt="AvailDA Logo" width="64" height="64" style={{ marginLeft: '5px', marginRight: '5px' }} />
        and
        <Image src={`/assets/orbit.svg`} alt="Orbit Logo" width="64" height="64" style={{ marginLeft: '5px', marginRight: '5px' }} />
      </footer>
    </div>
  );
};

export default Home;
