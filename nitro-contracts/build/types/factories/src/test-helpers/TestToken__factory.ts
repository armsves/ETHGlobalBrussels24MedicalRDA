/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestToken,
  TestTokenInterface,
} from "../../../src/test-helpers/TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b8838038062000b8883398101604081905262000034916200023f565b60408051808201825260098152682a32b9ba2a37b5b2b760b91b602080830191825283518085019094526002845261151560f21b9084015281519192916200007f9160039162000199565b5080516200009590600490602084019062000199565b505050620000aa3382620000b160201b60201c565b50620002bd565b6001600160a01b0382166200010c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000120919062000259565b90915550506001600160a01b038216600090815260208190526040812080548392906200014f90849062000259565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a79062000280565b90600052602060002090601f016020900481019282620001cb576000855562000216565b82601f10620001e657805160ff191683800117855562000216565b8280016001018555821562000216579182015b8281111562000216578251825591602001919060010190620001f9565b506200022492915062000228565b5090565b5b8082111562000224576000815560010162000229565b6000602082840312156200025257600080fd5b5051919050565b600082198211156200027b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200029557607f821691505b60208210811415620002b757634e487b7160e01b600052602260045260246000fd5b50919050565b6108bb80620002cd6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012357806370a082311461013657806395d89b411461015f578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101a0565b6040516100c391906106f8565b60405180910390f35b6100df6100da366004610769565b610232565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610793565b61024a565b604051601281526020016100c3565b6100df610131366004610769565b61026e565b6100f36101443660046107cf565b6001600160a01b031660009081526020819052604090205490565b6100b66102ad565b6100df610175366004610769565b6102bc565b6100df610188366004610769565b610353565b6100f361019b3660046107f1565b610361565b6060600380546101af90610824565b80601f01602080910402602001604051908101604052809291908181526020018280546101db90610824565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b5050505050905090565b60003361024081858561038c565b5060019392505050565b6000336102588582856104b0565b61026385858561052a565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061024090829086906102a890879061085f565b61038c565b6060600480546101af90610824565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610263828686840361038c565b60003361024081858561052a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103ee5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161033d565b6001600160a01b03821661044f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161033d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104bc8484610361565b9050600019811461052457818110156105175760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161033d565b610524848484840361038c565b50505050565b6001600160a01b03831661058e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161033d565b6001600160a01b0382166105f05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161033d565b6001600160a01b038316600090815260208190526040902054818110156106685760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161033d565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061069f90849061085f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106eb91815260200190565b60405180910390a3610524565b600060208083528351808285015260005b8181101561072557858101830151858201604001528201610709565b81811115610737576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461076457600080fd5b919050565b6000806040838503121561077c57600080fd5b6107858361074d565b946020939093013593505050565b6000806000606084860312156107a857600080fd5b6107b18461074d565b92506107bf6020850161074d565b9150604084013590509250925092565b6000602082840312156107e157600080fd5b6107ea8261074d565b9392505050565b6000806040838503121561080457600080fd5b61080d8361074d565b915061081b6020840161074d565b90509250929050565b600181811c9082168061083857607f821691505b6020821081141561085957634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561088057634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212205520cebf912a7b37ad2078443ea206cc6187d18972e4366e20d773c71e326a0464736f6c63430008090033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(initialSupply, overrides || {}) as Promise<TestToken>;
  }
  override getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  override connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
