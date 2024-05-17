// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import './ERC20Mintable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Token is ERC20Mintable {
  uint8 private _decimal;
  constructor(
    string memory name_,
    string memory symbol_,
    uint initialSupply,
    uint8 decimal_
  ) ERC20(name_, symbol_) Ownable(msg.sender) {
    mint(owner(), initialSupply);
    _decimal = decimal_;
  }

  function decimals() public view virtual override returns (uint8) {
    return _decimal;
  }
}
