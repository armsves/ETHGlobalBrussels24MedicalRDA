/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BridgeTester,
  BridgeTesterInterface,
} from "../../../src/test-helpers/BridgeTester";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "NotContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotDelayedInbox",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotOutbox",
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
        name: "rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NotRollupOrOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "outbox",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "BridgeCallTriggered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "inbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "InboxToggle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "beforeInboxAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseFeeL1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "timestamp",
        type: "uint64",
      },
    ],
    name: "MessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "outbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "OutboxToggle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "rollup",
        type: "address",
      },
    ],
    name: "RollupUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSequencerInbox",
        type: "address",
      },
    ],
    name: "SequencerInboxUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptFundsFromOldBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "activeOutbox",
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
    name: "allowedDelayedInboxList",
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
        internalType: "address",
        name: "inbox",
        type: "address",
      },
    ],
    name: "allowedDelayedInboxes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "allowedOutboxList",
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
        internalType: "address",
        name: "outbox",
        type: "address",
      },
    ],
    name: "allowedOutboxes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "delayedInboxAccs",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delayedMessageCount",
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
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
    ],
    name: "enqueueDelayedMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevMessageCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMessageCount",
        type: "uint256",
      },
    ],
    name: "enqueueSequencerMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "seqMessageIndex",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "beforeAcc",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "delayedAcc",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "acc",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOwnable",
        name: "rollup_",
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
        internalType: "contract IOwnable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sequencerInbox",
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
    name: "sequencerInboxAccs",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sequencerMessageCount",
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
    name: "sequencerReportedSubMessageCount",
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
        name: "inbox",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setDelayedInbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbox",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setOutbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sequencerInbox",
        type: "address",
      },
    ],
    name: "setSequencerInbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "batchPoster",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "submitBatchSpendingReport",
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
  {
    inputs: [
      {
        internalType: "contract IOwnable",
        name: "_rollup",
        type: "address",
      },
    ],
    name: "updateRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161138e61002d6000396000505061138e6000f3fe6080604052600436106101385760003560e01c80639e5d4c49116100ab578063cee3d7281161006f578063cee3d728146103d6578063d5719dc2146103f6578063e76f5c8d14610416578063e77145f4146101f4578063eca067ad14610436578063ee35f3271461044b57600080fd5b80639e5d4c4914610316578063ab5d894314610344578063ae60bd1314610359578063c4d66de814610396578063cb23bcb5146103b657600080fd5b80635fca4a16116100fd5780635fca4a16146102165780637a88b1071461022c57806386598a561461024f5780638db5993b14610299578063919cc706146102ac578063945e1147146102e957600080fd5b806284120c1461014457806316bf557914610168578063413b35bd1461018857806347fb24c5146101d45780634f61f850146101f657600080fd5b3661013f57005b600080fd5b34801561015057600080fd5b506009545b6040519081526020015b60405180910390f35b34801561017457600080fd5b5061015561018336600461104d565b61046b565b34801561019457600080fd5b506101c46101a336600461107e565b6001600160a01b031660009081526002602052604090206001015460ff1690565b604051901515815260200161015f565b3480156101e057600080fd5b506101f46101ef3660046110a2565b61048c565b005b34801561020257600080fd5b506101f461021136600461107e565b610797565b34801561022257600080fd5b50610155600a5481565b34801561023857600080fd5b506101556102473660046110e0565b600092915050565b34801561025b57600080fd5b5061027961026a36600461110c565b50600093849350839250829150565b60408051948552602085019390935291830152606082015260800161015f565b6101556102a736600461113e565b6108bc565b3480156102b857600080fd5b506101f46102c736600461107e565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b3480156102f557600080fd5b5061030961030436600461104d565b610907565b60405161015f9190611185565b34801561032257600080fd5b50610336610331366004611199565b610931565b60405161015f929190611222565b34801561035057600080fd5b50610309610a89565b34801561036557600080fd5b506101c461037436600461107e565b6001600160a01b03166000908152600160208190526040909120015460ff1690565b3480156103a257600080fd5b506101f46103b136600461107e565b610ab6565b3480156103c257600080fd5b50600654610309906001600160a01b031681565b3480156103e257600080fd5b506101f46103f13660046110a2565b610b9c565b34801561040257600080fd5b5061015561041136600461104d565b610e9e565b34801561042257600080fd5b5061030961043136600461104d565b610eae565b34801561044257600080fd5b50600854610155565b34801561045757600080fd5b50600754610309906001600160a01b031681565b6009818154811061047b57600080fd5b600091825260209091200154905081565b6006546001600160a01b031633146105645760065460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156104e357600080fd5b505afa1580156104f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051b9190611281565b9050336001600160a01b0382161461056257600654604051630739600760e01b81526105599133916001600160a01b0390911690849060040161129e565b60405180910390fd5b505b6001600160a01b0382166000818152600160208181526040928390209182015492518515158152919360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a28080156105c95750825b806105db5750801580156105db575082155b156105e65750505050565b821561067457604080518082018252600380548252600160208084018281526001600160a01b038a166000818152928490529582209451855551938201805460ff1916941515949094179093558154908101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319169091179055610790565b60038054610684906001906112c1565b81548110610694576106946112e6565b6000918252602090912001548254600380546001600160a01b039093169290919081106106c3576106c36112e6565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160000154600160006003856000015481548110610711576107116112e6565b60009182526020808320909101546001600160a01b031683528201929092526040019020556003805480610747576107476112fc565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526001908190526040822091825501805460ff191690555b50505b5050565b6006546001600160a01b031633146108665760065460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156107ee57600080fd5b505afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108269190611281565b9050336001600160a01b0382161461086457600654604051630739600760e01b81526105599133916001600160a01b0390911690849060040161129e565b505b600780546001600160a01b0319166001600160a01b0383161790556040517f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a906108b1908390611185565b60405180910390a150565b3360009081526001602081905260408220015460ff166108f1573360405163b6c60ea360e01b81526004016105599190611185565b6108ff848443424887610ebe565b949350505050565b6004818154811061091757600080fd5b6000918252602090912001546001600160a01b0316905081565b3360009081526002602052604081206001015460609060ff1661096957336040516332ea82ab60e01b81526004016105599190611185565b821580159061098057506001600160a01b0386163b155b156109a0578560405163b5cf5b8f60e01b81526004016105599190611185565b600580546001600160a01b0319811633179091556040516001600160a01b039182169188169087906109d59088908890611312565b60006040518083038185875af1925050503d8060008114610a12576040519150601f19603f3d011682016040523d82523d6000602084013e610a17565b606091505b50600580546001600160a01b0319166001600160a01b038581169190911790915560405192955090935088169033907f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d46690610a77908a908a908a90611322565b60405180910390a35094509492505050565b6005546000906001600160a01b039081161415610aa65750600090565b506005546001600160a01b031690565b600054610100900460ff16610ad15760005460ff1615610ad5565b303b155b610b385760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610559565b600054610100900460ff16158015610b5a576000805461ffff19166101011790555b600580546001600160a01b036001600160a01b03199182168117909255600680549091169184169190911790558015610793576000805461ff00191690555050565b6006546001600160a01b03163314610c6b5760065460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610bf357600080fd5b505afa158015610c07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2b9190611281565b9050336001600160a01b03821614610c6957600654604051630739600760e01b81526105599133916001600160a01b0390911690849060040161129e565b505b6001600160a01b038216600081815260026020908152604091829020600181015492518515158152909360ff90931692917f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa910160405180910390a2808015610cd15750825b80610ce3575080158015610ce3575082155b15610cee5750505050565b8215610d7d57604080518082018252600480548252600160208084018281526001600160a01b038a16600081815260029093529582209451855551938201805460ff1916941515949094179093558154908101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319169091179055610790565b60048054610d8d906001906112c1565b81548110610d9d57610d9d6112e6565b6000918252602090912001548254600480546001600160a01b03909316929091908110610dcc57610dcc6112e6565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160000154600260006004856000015481548110610e1a57610e1a6112e6565b60009182526020808320909101546001600160a01b031683528201929092526040019020556004805480610e5057610e506112fc565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526002905260408120908155600101805460ff1916905550505050565b6008818154811061047b57600080fd5b6003818154811061091757600080fd5b600854604080516001600160f81b031960f88a901b166020808301919091526bffffffffffffffffffffffff1960608a901b1660218301526001600160c01b031960c089811b8216603585015288901b16603d830152604582018490526065820186905260858083018690528351808403909101815260a590920190925280519101206000919060008215610f78576008610f5a6001856112c1565b81548110610f6a57610f6a6112e6565b906000526020600020015490505b6040805160208082018490528183018590528251808303840181526060830180855281519190920120600880546001810182556000919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3015533905260ff8c1660808201526001600160a01b038b1660a082015260c0810187905260e0810188905267ffffffffffffffff89166101008201529051829185917f5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1918190036101200190a3509098975050505050505050565b60006020828403121561105f57600080fd5b5035919050565b6001600160a01b038116811461107b57600080fd5b50565b60006020828403121561109057600080fd5b813561109b81611066565b9392505050565b600080604083850312156110b557600080fd5b82356110c081611066565b9150602083013580151581146110d557600080fd5b809150509250929050565b600080604083850312156110f357600080fd5b82356110fe81611066565b946020939093013593505050565b6000806000806080858703121561112257600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561115357600080fd5b833560ff8116811461116457600080fd5b9250602084013561117481611066565b929592945050506040919091013590565b6001600160a01b0391909116815260200190565b600080600080606085870312156111af57600080fd5b84356111ba81611066565b935060208501359250604085013567ffffffffffffffff808211156111de57600080fd5b818701915087601f8301126111f257600080fd5b81358181111561120157600080fd5b88602082850101111561121357600080fd5b95989497505060200194505050565b821515815260006020604081840152835180604085015260005b818110156112585785810183015185820160600152820161123c565b8181111561126a576000606083870101525b50601f01601f191692909201606001949350505050565b60006020828403121561129357600080fd5b815161109b81611066565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6000828210156112e157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b8183823760009101908152919050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fea2646970667358221220d503ba0e97e40d76cdc5e7bcec8468e31812b0cabbd080b149d16f74d7ee196664736f6c63430008090033";

type BridgeTesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeTesterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeTester__factory extends ContractFactory {
  constructor(...args: BridgeTesterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeTester> {
    return super.deploy(overrides || {}) as Promise<BridgeTester>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeTester {
    return super.attach(address) as BridgeTester;
  }
  override connect(signer: Signer): BridgeTester__factory {
    return super.connect(signer) as BridgeTester__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeTesterInterface {
    return new utils.Interface(_abi) as BridgeTesterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeTester {
    return new Contract(address, _abi, signerOrProvider) as BridgeTester;
  }
}
