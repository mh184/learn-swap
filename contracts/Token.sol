// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import './ERC20Mintable.sol';
import './ERC20Lockable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import 'hardhat/console.sol';

contract Token is ERC20Mintable, ERC20Lockable {
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

  function _update(
    address from,
    address to,
    uint256 value
  ) internal override(ERC20, ERC20Lockable) {
    ERC20Lockable._update(from, to, value);
  }
}
