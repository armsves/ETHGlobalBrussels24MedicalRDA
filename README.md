# Medical DA

The idea of this project is to have a potential solution to the problem of [Medical Record Verfiabilability By Insurance Companies](https://www.quickquote.com/do-health-insurers-have-access-to-medical-records/) which faces quite a few challenges in the web2 ecosystem

## Solution 

We have come up with a solution to this problem thanks to [Arbitrium Orbit](https://arbitrum.io/orbit) & [Avail DA](https://www.availproject.org/da), the idea is that we have spun our own custom rollup powered by arbitrium nitro and doctors/hospitals can then upload medical records through our platforms and we then send that data to our smart contract deployed on arbitrium nitro and hash it on chain, now since arbitrium nitro already sends data to avail da so we have validity proof based data availability guarantee there, hence if an insurance company wants to verify the data posted by the hospital/doctors they can just pass the patient address and the hash of the records they are verifying to the smart contract.


## How it Works ?

- The hospital staff comes to our platform and uploads the patient file

- we send the base64 string of the document to the smart contract where it is hashed and stored against the patient and this data is hence indirectly posted to avail da through arbitrium orbit

- The insurance company can later verify the records by passing the patient address and the hashed data of the records they wanna verify against

***Note***

- for the hackathon we are assuming that 1 patient has only 1 medical record

- we have also deployed the contract to [Scroll](https://sepolia.scrollscan.com/address/0xf51a074d3038aa1181f64622cb1fb48b14b7af1f#code) as we think when a scroll-avail DA integration happens like with arbitrium orbit this could be more powerful usecase as it involves more L3 netowrks in a way


## Deployments
- [Scroll](https://sepolia.scrollscan.com/address/0xf51a074d3038aa1181f64622cb1fb48b14b7af1f#code)
- [Arbitrium Orbit](http://localhost/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2)
