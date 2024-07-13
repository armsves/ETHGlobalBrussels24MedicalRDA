import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'
import { run } from 'hardhat'
import { abi as medicalRecordsAbi } from '../build/contracts/src/MedicalRecords.sol/MedicalRecords.json'
import { bytecode as medicalRecordsBytecode } from '../build/contracts/src/MedicalRecords.sol/MedicalRecords.json'
import { config, maxDataSize } from './config'
import { BigNumber } from 'ethers'
import { IERC20__factory } from '../build/types'
import { sleep } from './testSetup'



// 1 gwei
const MAX_FER_PER_GAS = BigNumber.from('1000000000')


export async function createContract() {
const [signer] = await ethers.getSigners()
try {

  const ContractInstance = new ethers.ContractFactory(medicalRecordsAbi, medicalRecordsBytecode, signer);

  const contractInstance = 
  await ContractInstance.deploy(signer.address);
await contractInstance.deployed();
console.log("Deployed contract address - ", 
  contractInstance.address);

  } catch (error) {
    console.error(
      'Deployment failed:',
      error instanceof Error ? error.message : error
    )
  }
}

async function main() {
    await createContract()
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
      console.error(error)
      process.exit(1)
    })
