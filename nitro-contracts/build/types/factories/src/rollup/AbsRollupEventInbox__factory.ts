/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AbsRollupEventInbox,
  AbsRollupEventInboxInterface,
} from "../../../src/rollup/AbsRollupEventInbox";

const _abi = [
  {
    inputs: [],
    name: "AlreadyInit",
    type: "error",
  },
  {
    inputs: [],
    name: "HadZeroInit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RollupNotChanged",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "InboxMessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
    ],
    name: "InboxMessageDeliveredFromOrigin",
    type: "event",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
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
        internalType: "contract IBridge",
        name: "_bridge",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollup",
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
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "chainConfig",
        type: "string",
      },
    ],
    name: "rollupInitialized",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class AbsRollupEventInbox__factory {
  static readonly abi = _abi;
  static createInterface(): AbsRollupEventInboxInterface {
    return new utils.Interface(_abi) as AbsRollupEventInboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbsRollupEventInbox {
    return new Contract(address, _abi, signerOrProvider) as AbsRollupEventInbox;
  }
}
