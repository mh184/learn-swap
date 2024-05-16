// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Token$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Token",
  "sourceName": "contracts/Token.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
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
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001fe338038062001fe383398181016040528101906200003791906200074d565b33838381600390816200004b919062000a28565b5080600490816200005d919062000a28565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d55760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000cc919062000b54565b60405180910390fd5b620000e6816200010260201b60201c565b50620000f93382620001c860201b60201c565b50505062000c46565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001d8620001ee60201b60201c565b620001ea82826200029060201b60201c565b5050565b620001fe6200031d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002246200032560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200028e57620002506200031d60201b60201c565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040162000285919062000b54565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620003055760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401620002fc919062000b54565b60405180910390fd5b62000319600083836200034f60201b60201c565b5050565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620003a557806002600082825462000398919062000ba0565b925050819055506200047b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000434578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200042b9392919062000bec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620004c6578060026000828254039250508190555062000513565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000572919062000c29565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620005e8826200059d565b810181811067ffffffffffffffff821117156200060a5762000609620005ae565b5b80604052505050565b60006200061f6200057f565b90506200062d8282620005dd565b919050565b600067ffffffffffffffff82111562000650576200064f620005ae565b5b6200065b826200059d565b9050602081019050919050565b60005b83811015620006885780820151818401526020810190506200066b565b60008484015250505050565b6000620006ab620006a58462000632565b62000613565b905082815260208101848484011115620006ca57620006c962000598565b5b620006d784828562000668565b509392505050565b600082601f830112620006f757620006f662000593565b5b81516200070984826020860162000694565b91505092915050565b6000819050919050565b620007278162000712565b81146200073357600080fd5b50565b60008151905062000747816200071c565b92915050565b60008060006060848603121562000769576200076862000589565b5b600084015167ffffffffffffffff8111156200078a57620007896200058e565b5b6200079886828701620006df565b935050602084015167ffffffffffffffff811115620007bc57620007bb6200058e565b5b620007ca86828701620006df565b9250506040620007dd8682870162000736565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200083a57607f821691505b60208210810362000850576200084f620007f2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620008ba7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200087b565b620008c686836200087b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200090962000903620008fd8462000712565b620008de565b62000712565b9050919050565b6000819050919050565b6200092583620008e8565b6200093d620009348262000910565b84845462000888565b825550505050565b600090565b6200095462000945565b620009618184846200091a565b505050565b5b8181101562000989576200097d6000826200094a565b60018101905062000967565b5050565b601f821115620009d857620009a28162000856565b620009ad846200086b565b81016020851015620009bd578190505b620009d5620009cc856200086b565b83018262000966565b50505b505050565b600082821c905092915050565b6000620009fd60001984600802620009dd565b1980831691505092915050565b600062000a188383620009ea565b9150826002028217905092915050565b62000a3382620007e7565b67ffffffffffffffff81111562000a4f5762000a4e620005ae565b5b62000a5b825462000821565b62000a688282856200098d565b600060209050601f83116001811462000aa0576000841562000a8b578287015190505b62000a97858262000a0a565b86555062000b07565b601f19841662000ab08662000856565b60005b8281101562000ada5784890151825560018201915060208501945060208101905062000ab3565b8683101562000afa578489015162000af6601f891682620009ea565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000b3c8262000b0f565b9050919050565b62000b4e8162000b2f565b82525050565b600060208201905062000b6b600083018462000b43565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000bad8262000712565b915062000bba8362000712565b925082820190508082111562000bd55762000bd462000b71565b5b92915050565b62000be68162000712565b82525050565b600060608201905062000c03600083018662000b43565b62000c12602083018562000bdb565b62000c21604083018462000bdb565b949350505050565b600060208201905062000c40600083018462000bdb565b92915050565b61138d8062000c566000396000f3fe6080604052600436106100dd5760003560e01c8063715018a61161007f578063a9059cbb11610059578063a9059cbb146102b0578063d0e30db0146102ed578063dd62ed3e146102f7578063f2fde38b14610334576100dd565b8063715018a6146102435780638da5cb5b1461025a57806395d89b4114610285576100dd565b806323b872dd116100bb57806323b872dd14610175578063313ce567146101b257806340c10f19146101dd57806370a0823114610206576100dd565b806306fdde03146100e2578063095ea7b31461010d57806318160ddd1461014a575b600080fd5b3480156100ee57600080fd5b506100f761035d565b6040516101049190610f15565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190610fd0565b6103ef565b604051610141919061102b565b60405180910390f35b34801561015657600080fd5b5061015f610412565b60405161016c9190611055565b60405180910390f35b34801561018157600080fd5b5061019c60048036038101906101979190611070565b61041c565b6040516101a9919061102b565b60405180910390f35b3480156101be57600080fd5b506101c761044b565b6040516101d491906110df565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff9190610fd0565b610454565b005b34801561021257600080fd5b5061022d600480360381019061022891906110fa565b61046a565b60405161023a9190611055565b60405180910390f35b34801561024f57600080fd5b506102586104b2565b005b34801561026657600080fd5b5061026f6104c6565b60405161027c9190611136565b60405180910390f35b34801561029157600080fd5b5061029a6104f0565b6040516102a79190610f15565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d29190610fd0565b610582565b6040516102e4919061102b565b60405180910390f35b6102f56105a5565b005b34801561030357600080fd5b5061031e60048036038101906103199190611151565b61060b565b60405161032b9190611055565b60405180910390f35b34801561034057600080fd5b5061035b600480360381019061035691906110fa565b610692565b005b60606003805461036c906111c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610398906111c0565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b6000806103fa610718565b9050610407818585610720565b600191505092915050565b6000600254905090565b600080610427610718565b9050610434858285610732565b61043f8585856107c6565b60019150509392505050565b60006012905090565b61045c6108ba565b6104668282610941565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104ba6108ba565b6104c460006109c3565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104ff906111c0565b80601f016020809104026020016040519081016040528092919081815260200182805461052b906111c0565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050905090565b60008061058d610718565b905061059a8185856107c6565b600191505092915050565b600034116105e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105df9061123d565b60405180910390fd5b60006509184e72a000346105fc91906112bb565b90506106083382610454565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61069a6108ba565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361070c5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107039190611136565b60405180910390fd5b610715816109c3565b50565b600033905090565b61072d8383836001610a89565b505050565b600061073e848461060b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107c057818110156107b0578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107a7939291906112ec565b60405180910390fd5b6107bf84848484036000610a89565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108385760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161082f9190611136565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108aa5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108a19190611136565b60405180910390fd5b6108b5838383610c60565b505050565b6108c2610718565b73ffffffffffffffffffffffffffffffffffffffff166108e06104c6565b73ffffffffffffffffffffffffffffffffffffffff161461093f57610903610718565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109369190611136565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109b35760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109aa9190611136565b60405180910390fd5b6109bf60008383610c60565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610afb5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610af29190611136565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b6d5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b649190611136565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610c5a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c519190611055565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cb2578060026000828254610ca69190611323565b92505081905550610d85565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d3e578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d35939291906112ec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dce5780600260008282540392505081905550610e1b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e789190611055565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ebf578082015181840152602081019050610ea4565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ee782610e85565b610ef18185610e90565b9350610f01818560208601610ea1565b610f0a81610ecb565b840191505092915050565b60006020820190508181036000830152610f2f8184610edc565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6782610f3c565b9050919050565b610f7781610f5c565b8114610f8257600080fd5b50565b600081359050610f9481610f6e565b92915050565b6000819050919050565b610fad81610f9a565b8114610fb857600080fd5b50565b600081359050610fca81610fa4565b92915050565b60008060408385031215610fe757610fe6610f37565b5b6000610ff585828601610f85565b925050602061100685828601610fbb565b9150509250929050565b60008115159050919050565b61102581611010565b82525050565b6000602082019050611040600083018461101c565b92915050565b61104f81610f9a565b82525050565b600060208201905061106a6000830184611046565b92915050565b60008060006060848603121561108957611088610f37565b5b600061109786828701610f85565b93505060206110a886828701610f85565b92505060406110b986828701610fbb565b9150509250925092565b600060ff82169050919050565b6110d9816110c3565b82525050565b60006020820190506110f460008301846110d0565b92915050565b6000602082840312156111105761110f610f37565b5b600061111e84828501610f85565b91505092915050565b61113081610f5c565b82525050565b600060208201905061114b6000830184611127565b92915050565b6000806040838503121561116857611167610f37565b5b600061117685828601610f85565b925050602061118785828601610f85565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111d857607f821691505b6020821081036111eb576111ea611191565b5b50919050565b7f4465706f73697420616d6f756e74206973207a65726f00000000000000000000600082015250565b6000611227601683610e90565b9150611232826111f1565b602082019050919050565b600060208201905081810360008301526112568161121a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112c682610f9a565b91506112d183610f9a565b9250826112e1576112e061125d565b5b828204905092915050565b60006060820190506113016000830186611127565b61130e6020830185611046565b61131b6040830184611046565b949350505050565b600061132e82610f9a565b915061133983610f9a565b92508282019050808211156113515761135061128c565b5b9291505056fea26469706673582212209eafe6669e15968a0cd7ef7c132c42d11590e61f2fd92cc2eea08aac354a380164736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436106100dd5760003560e01c8063715018a61161007f578063a9059cbb11610059578063a9059cbb146102b0578063d0e30db0146102ed578063dd62ed3e146102f7578063f2fde38b14610334576100dd565b8063715018a6146102435780638da5cb5b1461025a57806395d89b4114610285576100dd565b806323b872dd116100bb57806323b872dd14610175578063313ce567146101b257806340c10f19146101dd57806370a0823114610206576100dd565b806306fdde03146100e2578063095ea7b31461010d57806318160ddd1461014a575b600080fd5b3480156100ee57600080fd5b506100f761035d565b6040516101049190610f15565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190610fd0565b6103ef565b604051610141919061102b565b60405180910390f35b34801561015657600080fd5b5061015f610412565b60405161016c9190611055565b60405180910390f35b34801561018157600080fd5b5061019c60048036038101906101979190611070565b61041c565b6040516101a9919061102b565b60405180910390f35b3480156101be57600080fd5b506101c761044b565b6040516101d491906110df565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff9190610fd0565b610454565b005b34801561021257600080fd5b5061022d600480360381019061022891906110fa565b61046a565b60405161023a9190611055565b60405180910390f35b34801561024f57600080fd5b506102586104b2565b005b34801561026657600080fd5b5061026f6104c6565b60405161027c9190611136565b60405180910390f35b34801561029157600080fd5b5061029a6104f0565b6040516102a79190610f15565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d29190610fd0565b610582565b6040516102e4919061102b565b60405180910390f35b6102f56105a5565b005b34801561030357600080fd5b5061031e60048036038101906103199190611151565b61060b565b60405161032b9190611055565b60405180910390f35b34801561034057600080fd5b5061035b600480360381019061035691906110fa565b610692565b005b60606003805461036c906111c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610398906111c0565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b6000806103fa610718565b9050610407818585610720565b600191505092915050565b6000600254905090565b600080610427610718565b9050610434858285610732565b61043f8585856107c6565b60019150509392505050565b60006012905090565b61045c6108ba565b6104668282610941565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104ba6108ba565b6104c460006109c3565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104ff906111c0565b80601f016020809104026020016040519081016040528092919081815260200182805461052b906111c0565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050905090565b60008061058d610718565b905061059a8185856107c6565b600191505092915050565b600034116105e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105df9061123d565b60405180910390fd5b60006509184e72a000346105fc91906112bb565b90506106083382610454565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61069a6108ba565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361070c5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107039190611136565b60405180910390fd5b610715816109c3565b50565b600033905090565b61072d8383836001610a89565b505050565b600061073e848461060b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107c057818110156107b0578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107a7939291906112ec565b60405180910390fd5b6107bf84848484036000610a89565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108385760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161082f9190611136565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108aa5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108a19190611136565b60405180910390fd5b6108b5838383610c60565b505050565b6108c2610718565b73ffffffffffffffffffffffffffffffffffffffff166108e06104c6565b73ffffffffffffffffffffffffffffffffffffffff161461093f57610903610718565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109369190611136565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109b35760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109aa9190611136565b60405180910390fd5b6109bf60008383610c60565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610afb5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610af29190611136565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b6d5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b649190611136565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610c5a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c519190611055565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cb2578060026000828254610ca69190611323565b92505081905550610d85565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d3e578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d35939291906112ec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dce5780600260008282540392505081905550610e1b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e789190611055565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ebf578082015181840152602081019050610ea4565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ee782610e85565b610ef18185610e90565b9350610f01818560208601610ea1565b610f0a81610ecb565b840191505092915050565b60006020820190508181036000830152610f2f8184610edc565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6782610f3c565b9050919050565b610f7781610f5c565b8114610f8257600080fd5b50565b600081359050610f9481610f6e565b92915050565b6000819050919050565b610fad81610f9a565b8114610fb857600080fd5b50565b600081359050610fca81610fa4565b92915050565b60008060408385031215610fe757610fe6610f37565b5b6000610ff585828601610f85565b925050602061100685828601610fbb565b9150509250929050565b60008115159050919050565b61102581611010565b82525050565b6000602082019050611040600083018461101c565b92915050565b61104f81610f9a565b82525050565b600060208201905061106a6000830184611046565b92915050565b60008060006060848603121561108957611088610f37565b5b600061109786828701610f85565b93505060206110a886828701610f85565b92505060406110b986828701610fbb565b9150509250925092565b600060ff82169050919050565b6110d9816110c3565b82525050565b60006020820190506110f460008301846110d0565b92915050565b6000602082840312156111105761110f610f37565b5b600061111e84828501610f85565b91505092915050565b61113081610f5c565b82525050565b600060208201905061114b6000830184611127565b92915050565b6000806040838503121561116857611167610f37565b5b600061117685828601610f85565b925050602061118785828601610f85565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111d857607f821691505b6020821081036111eb576111ea611191565b5b50919050565b7f4465706f73697420616d6f756e74206973207a65726f00000000000000000000600082015250565b6000611227601683610e90565b9150611232826111f1565b602082019050919050565b600060208201905081810360008301526112568161121a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112c682610f9a565b91506112d183610f9a565b9250826112e1576112e061125d565b5b828204905092915050565b60006060820190506113016000830186611127565b61130e6020830185611046565b61131b6040830184611046565b949350505050565b600061132e82610f9a565b915061133983610f9a565b92508282019050808211156113515761135061128c565b5b9291505056fea26469706673582212209eafe6669e15968a0cd7ef7c132c42d11590e61f2fd92cc2eea08aac354a380164736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Token",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, initialSupply: AbiParameterToPrimitiveType<{"name":"initialSupply","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Token.sol:Token",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, initialSupply: AbiParameterToPrimitiveType<{"name":"initialSupply","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Token",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, initialSupply: AbiParameterToPrimitiveType<{"name":"initialSupply","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Token$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Token.sol:Token",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, initialSupply: AbiParameterToPrimitiveType<{"name":"initialSupply","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Token$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Token",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Token.sol:Token",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;
}
