// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
// import './Token.sol';

struct TokenMetadata {
  uint swapRate;
  uint lockTime;
}

contract TokenSwap is Ownable(msg.sender) {
  address private _admin;
  // mapping(address => uint) public _swapRates; // 1 addressToken = swapRate wei
  mapping(address => TokenMetadata) public _tokensMetadata;

  event Swap(address indexed sender, uint amount, address indexed receiver);

  constructor() {
    _admin = msg.sender;
  }

  function decimals() internal pure returns (uint) {
    // define an var is current time

    return 18;
  }

  function setSwapRate(address token, uint swapRate_) external onlyAdmin {
    require(swapRate_ > 0, 'Swap rate is zero');
    _tokensMetadata[token].swapRate = swapRate_;
  }
  function getSwapRate(address token) public view returns (uint) {
    uint swapRate = _tokensMetadata[token].swapRate;
    require(swapRate > 0, 'Swap rate is not set');
    return swapRate;
  }

  function setLockTime(address token, uint lockTime_) external onlyAdmin {
    require(lockTime_ > block.timestamp, 'Lock time is in the past');
    _tokensMetadata[token].lockTime = lockTime_;
  }
  function getLockTime(address token) public view returns (uint) {
    uint lockTime = _tokensMetadata[token].lockTime;
    require(lockTime > 0, 'Lock time is not set');
    return lockTime;
  }

  // function depositToken(address _token) external payable onlyAdmin {
  //   ERC20 token = ERC20(_token);
  //   token.deposit{value: msg.value}();
  // }

  // eoa give TKA to this contract, this contract give TKB to eoa
  function swap(
    address tka_,
    address tkb_,
    uint amount
  ) external payable _checkLockTime(tka_) _checkLockTime(tkb_) {
    require(amount > 0, 'Amount is zero');
    require(tka_ != address(0) || tkb_ != address(0), 'Invalid token address');
    ERC20 _tka;
    ERC20 _tkb;
    uint _swapRateTKA;
    uint _swapRateTKB;
    uint amountToReceive;

    if (tka_ == address(0)) {
      require(msg.value != 0, 'Invalid amount');
      _tkb = ERC20(tkb_);

      _swapRateTKB = getSwapRate(tkb_);
      amountToReceive = (msg.value * 10 ** decimals()) / _swapRateTKB;
      _tkb.transfer(msg.sender, amountToReceive);
    }

    if (tkb_ == address(0)) {
      _tka = ERC20(tka_);
      _swapRateTKA = getSwapRate(tka_);
      amountToReceive = (amount * _swapRateTKA) / 10 ** decimals();
      payable(msg.sender).transfer(amountToReceive);
    }

    _tka = ERC20(tka_);
    _tkb = ERC20(tkb_);
    _swapRateTKA = getSwapRate(tka_);
    _swapRateTKB = getSwapRate(tkb_);
    amountToReceive =
      (amount * _swapRateTKA * _tkb.decimals()) /
      _swapRateTKB /
      _tka.decimals();
    _tka.transferFrom(msg.sender, address(this), amount);
    _tkb.transfer(msg.sender, amountToReceive);

    emit Swap(msg.sender, amount, address(this));
  }

  modifier _checkLockTime(address token) {
    if (token != address(0)) {
      require(
        _tokensMetadata[token].lockTime < block.timestamp,
        'Lock time is in the past'
      );
    }
    _;
  }

  modifier onlyAdmin() {
    _checkOwner();
    _;
  }
}
