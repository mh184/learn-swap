// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import './ERC20Mintable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Token is ERC20Mintable {
  constructor(
    string memory name_,
    string memory symbol_,
    uint initialSupply
  ) ERC20(name_, symbol_) Ownable(msg.sender) {
    mint(msg.sender, initialSupply);
  }

  function deposit() external payable {
    require(msg.value > 0, 'Deposit amount is zero');
    // 1 eth = 10000 tokens
    uint amount = msg.value / 10000000000000;
    mint(msg.sender, amount);
  }
}
