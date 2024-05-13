// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Token$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Token",
  "sourceName": "contracts/Token.sol",
  "abi": [
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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060b38061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806318160ddd14602d575b600080fd5b60336047565b604051603e91906064565b60405180910390f35b60005481565b6000819050919050565b605e81604d565b82525050565b6000602082019050607760008301846057565b9291505056fea26469706673582212207e57697832994ffdcc9cfd46c36db28ae06fe18abf0b55acf751af15c61dfdba64736f6c63430008180033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c806318160ddd14602d575b600080fd5b60336047565b604051603e91906064565b60405180910390f35b60005481565b6000819050919050565b605e81604d565b82525050565b6000602082019050607760008301846057565b9291505056fea26469706673582212207e57697832994ffdcc9cfd46c36db28ae06fe18abf0b55acf751af15c61dfdba64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Token",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Token.sol:Token",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Token$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Token",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Token$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Token.sol:Token",
    constructorArgs?: [],
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