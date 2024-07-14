export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "patient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "hashData",
          "type": "bytes32"
        }
      ],
      "name": "ReportCreated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "reportHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "patient",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "reportData",
          "type": "string"
        }
      ],
      "name": "storePatientData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "patient",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "hashedData",
          "type": "bytes32"
        }
      ],
      "name": "verifyPatientRecord",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] as const

  export const wagmiContractConfig = {
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "patient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "hashData",
              "type": "bytes32"
            }
          ],
          "name": "ReportCreated",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "reportHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "patient",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "reportData",
              "type": "string"
            }
          ],
          "name": "storePatientData",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "patient",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "hashedData",
              "type": "bytes32"
            }
          ],
          "name": "verifyPatientRecord",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      bytecode:
      '0x608060405234801561001057600080fd5b506040516106b43803806106b483398101604081905261002f91610167565b61003833610047565b61004181610097565b50610197565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146100f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b03811661015b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ed565b61016481610047565b50565b60006020828403121561017957600080fd5b81516001600160a01b038116811461019057600080fd5b9392505050565b61050e806101a66000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80636a3b7c6014610067578063715018a61461007c5780638a3e5421146100845780638da5cb5b146100ac5780638fe5a65b146100c7578063f2fde38b146100f5575b600080fd5b61007a61007536600461033f565b610108565b005b61007a6101bb565b610097610092366004610401565b6101f1565b60405190151581526020015b60405180910390f35b6000546040516001600160a01b0390911681526020016100a3565b6100e76100d536600461042b565b60016020526000908152604090205481565b6040519081526020016100a3565b61007a61010336600461042b565b610222565b6000546001600160a01b0316331461013b5760405162461bcd60e51b81526004016101329061044d565b60405180910390fd5b60008183604051602001610150929190610482565b60408051808303601f1901815282825280516020918201206001600160a01b038716600081815260018452849020829055845290830181905292507fdf7b668144de42cdd5d697578d761714b80611c4e69981b77366bead771a8ea4910160405180910390a1505050565b6000546001600160a01b031633146101e55760405162461bcd60e51b81526004016101329061044d565b6101ef60006102bd565b565b6001600160a01b03821660009081526001602052604081205482146102185750600061021c565b5060015b92915050565b6000546001600160a01b0316331461024c5760405162461bcd60e51b81526004016101329061044d565b6001600160a01b0381166102b15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610132565b6102ba816102bd565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461032457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561035257600080fd5b61035b8361030d565b9150602083013567ffffffffffffffff8082111561037857600080fd5b818501915085601f83011261038c57600080fd5b81358181111561039e5761039e610329565b604051601f8201601f19908116603f011681019083821181831017156103c6576103c6610329565b816040528281528860208487010111156103df57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806040838503121561041457600080fd5b61041d8361030d565b946020939093013593505050565b60006020828403121561043d57600080fd5b6104468261030d565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000835160005b818110156104a35760208187018101518583015201610489565b818111156104b2576000828501525b5060609390931b6bffffffffffffffffffffffff1916919092019081526014019291505056fea2646970667358221220efa3b4fda776e320f455767fcb786972f1ad51a0557bc853b7f1413eb60d1f2464736f6c63430008090033',
  } as const