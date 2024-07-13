# Medical DA

The idea with this project is to have a potential solution to the problem of [Medical Record Secure Storage](https://corodata.com/challenges-facing-medical-records-management) which faces quite a few challenges in the web2 ecosystem

## Solution 

We have come with a solution to this problem thanks to [Arbitrium Orbit](https://arbitrum.io/orbit) & [Avail DA](https://www.availproject.org/da), the idea is that we encrypt the medical record file of a patient when it is uploaded by the hospital staff to the avail DA and we store the tx info from there in a smart contract deployed on a custom rollup through arbitrium orbit so this allows cheap & secure data storage and ease of data retrieval through the help of the DA layer


## How it Works ?

- The hospital staff comes to our platform and uploads the patient file

- we encrypt that data with Advanced Encryption Standard (AES) key and send it avail DA, we get back and tx and block hash from their & call `function storePatientData(AvailMetadata memory _reportMetadata) public onlyOwner` in our contract where we send the tx, blokc hash and the patient name as part of metadata data

- from the UI we can get the encrypted data from the DA and decrypt through the AES key

***Note***

- for the hackathon we are storing the decryption key is hardcoded but in mainstream this process would be decentralized

- we have also deployed the contract to [Fluent Devnet](https://blockscout.dev.thefluent.xyz/address/0x5FbDB2315678afecb367f032d93F642f64180aa3) as we think when fluent-avail DA integration happens like with arbitrium orbit this could be more powerful as it involve more L3 netowrks in a way
