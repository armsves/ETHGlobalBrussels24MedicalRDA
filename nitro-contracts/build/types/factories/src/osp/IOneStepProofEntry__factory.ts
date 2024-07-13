/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOneStepProofEntry,
  IOneStepProofEntryInterface,
} from "../../../src/osp/IOneStepProofEntry";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxInboxMessagesRead",
            type: "uint256",
          },
          {
            internalType: "contract IBridge",
            name: "bridge",
            type: "address",
          },
        ],
        internalType: "struct ExecutionContext",
        name: "execCtx",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "machineStep",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "beforeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "proveOneStep",
    outputs: [
      {
        internalType: "bytes32",
        name: "afterHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOneStepProofEntry__factory {
  static readonly abi = _abi;
  static createInterface(): IOneStepProofEntryInterface {
    return new utils.Interface(_abi) as IOneStepProofEntryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOneStepProofEntry {
    return new Contract(address, _abi, signerOrProvider) as IOneStepProofEntry;
  }
}
