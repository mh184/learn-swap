// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract TokenSale is Ownable {
  uint public _price;
  ERC20 private _token;
  constructor(address token_, uint price_) Ownable(msg.sender) {
    _price = price_;
    _token = ERC20(token_);
  }

  function deposit() external payable {
    require(msg.value > 0, 'Deposit amount is zero');
    uint amount = (msg.value / _price) * (10 ** _token.decimals());
    _token.transferFrom(owner(), msg.sender, amount);
  }
}
