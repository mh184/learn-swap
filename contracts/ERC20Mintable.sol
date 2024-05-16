// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract ERC20Mintable is ERC20, Ownable {
  function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
  }
}
