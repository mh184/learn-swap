// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

abstract contract ERC20Lockable is ERC20, Ownable {
  uint private unlockTransferTime; // Block user transfers until timestamp
  uint256 private constant _NOT_LOCKED = 1;

  modifier onlyUnlockedOrOwner() {
    require(
      unlockTransferTime == _NOT_LOCKED || block.timestamp >= unlockTransferTime,
      'Token transfers are locked'
    );
    _checkOwner();
    _;
  }

  function setUnlockTransferTime(uint duration) external virtual onlyOwner {
    unlockTransferTime = block.timestamp + duration;
  }

  function cancelLock() external virtual onlyOwner {
    unlockTransferTime = _NOT_LOCKED;
  }

  function _update(
    address from,
    address to,
    uint256 value
  ) internal virtual override onlyUnlockedOrOwner {
    super._update(from, to, value);
  }
}
