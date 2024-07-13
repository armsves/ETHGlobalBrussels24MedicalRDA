/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RollupMock,
  RollupMockInterface,
} from "../../../src/test-helpers/RollupMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WithdrawTriggered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ZombieTriggered",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "removeOldZombies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawStakerFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101e03803806101e083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61014d806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806361373919146100465780638da5cb5b14610061578063edfd03ed1461008c575b600080fd5b61004e6100a1565b6040519081526020015b60405180910390f35b600054610074906001600160a01b031681565b6040516001600160a01b039091168152602001610058565b61009f61009a3660046100fe565b6100d2565b005b6040516000907f1c09fbbf7cfd024f5e4e5472dd87afd5d67ee5db6a0ca715bf508d96abce309f908290a150600090565b6040517fb774f793432a37585a7638b9afe49e91c478887a2c0fef32877508bf2f76429d90600090a150565b60006020828403121561011057600080fd5b503591905056fea26469706673582212204e821be1d241b8183557b117343b4ab5c37e83c4432dfbee2e117cf0bc35325d64736f6c63430008090033";

type RollupMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RollupMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RollupMock__factory extends ContractFactory {
  constructor(...args: RollupMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RollupMock> {
    return super.deploy(_owner, overrides || {}) as Promise<RollupMock>;
  }
  override getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): RollupMock {
    return super.attach(address) as RollupMock;
  }
  override connect(signer: Signer): RollupMock__factory {
    return super.connect(signer) as RollupMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RollupMockInterface {
    return new utils.Interface(_abi) as RollupMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupMock {
    return new Contract(address, _abi, signerOrProvider) as RollupMock;
  }
}
