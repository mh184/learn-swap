// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IToken {
  /// @param _owner The address from which the balance will be retrieved
  /// @return balance the balance
  function balanceOf(address _owner) external view returns (uint256 balance);

  /// @notice send `_value` token to `_to` from `msg.sender`
  /// @param _to The address of the recipient
  /// @param _value The amount of token to be transferred
  /// @return success Whether the transfer was successful or not
  function transfer(
    address _to,
    uint256 _value
  ) external returns (bool success);

  /// @notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`
  /// @param _from The address of the sender
  /// @param _to The address of the recipient
  /// @param _value The amount of token to be transferred
  /// @return success Whether the transfer was successful or not
  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) external returns (bool success);

  /// @notice `msg.sender` approves `_addr` to spend `_value` tokens
  /// @param _spender The address of the account able to transfer the tokens
  /// @param _value The amount of wei to be approved for transfer
  /// @return success Whether the approval was successful or not
  function approve(
    address _spender,
    uint256 _value
  ) external returns (bool success);

  /// @param _owner The address of the account owning tokens
  /// @param _spender The address of the account able to transfer the tokens
  /// @return remaining Amount of remaining tokens allowed to spent
  function allowance(
    address _owner,
    address _spender
  ) external view returns (uint256 remaining);

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(
    address indexed _owner,
    address indexed _spender,
    uint256 _value
  );
}

contract Standard_Token is IToken {
  uint256 private constant MAX_UINT256 = 2 ** 256 - 1;
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public allowed;
  uint256 public totalSupply;
  /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */
  string public name; //fancy name: eg Simon Bucks
  uint8 public decimals; //How many decimals to show.
  string public symbol; //An identifier: eg SBX

  constructor(
    uint256 _initialAmount,
    string memory _tokenName,
    uint8 _decimalUnits,
    string memory _tokenSymbol
  ) {
    balances[msg.sender] = _initialAmount; // Give the creator all initial tokens
    totalSupply = _initialAmount; // Update total supply
    name = _tokenName; // Set the name for display purposes
    decimals = _decimalUnits; // Amount of decimals for display purposes
    symbol = _tokenSymbol; // Set the symbol for display purposes
  }

  function transfer(
    address _to,
    uint256 _value
  ) public override returns (bool success) {
    require(
      balances[msg.sender] >= _value,
      "token balance is lower than the value requested"
    );
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) public override returns (bool success) {
    uint256 _allowance = allowed[_from][msg.sender];
    require(
      balances[_from] >= _value && _allowance >= _value,
      "token balance or allowance is lower than amount requested"
    );
    balances[_to] += _value;
    balances[_from] -= _value;
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    if (_allowance < MAX_UINT256) {
      allowed[_from][msg.sender] -= _value;
    }
    emit Transfer(_from, _to, _value);
    return true;
  }

  function balanceOf(
    address _owner
  ) public view override returns (uint256 balance) {
    return balances[_owner];
  }

  function approve(
    address _spender,
    uint256 _value
  ) public override returns (bool success) {
    // DOES THAT MISSING REQUIRE()
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

  function allowance(
    address _owner,
    address _spender
  ) public view override returns (uint256 remaining) {
    return allowed[_owner][_spender];
  }
}

contract MyERC20Token is IERC20, Ownable(msg.sender) {
  string public name;
  mapping(address => uint) private _balances;
  mapping(address => mapping(address => uint)) private _allowed;
  uint private _totalSupplyAmount;

  constructor(string memory _name, uint _totalSupply) {
    name = _name;
    _totalSupplyAmount = _totalSupply;
    _balances[msg.sender] = _totalSupply;
  }

  function totalSupply() external view returns (uint256) {
    return _totalSupplyAmount;
  }

  function balanceOf(address account) external view returns (uint256) {
    return _balances[account];
  }

  function transfer(address to, uint256 value) external returns (bool) {
    require(to != address(0), "ERC20: transfer to the zero address");
    require(_balances[msg.sender] >= value, "Insufficient balance");
    _balances[msg.sender] -= value;
    _balances[to] += value;
    emit Transfer(msg.sender, to, value);
    return true;
  }

  function allowance(
    address owner,
    address spender
  ) external view returns (uint256) {
    return _allowed[owner][spender];
  }

  function approve(address spender, uint256 value) external returns (bool) {
    require(spender != address(0), "ERC20: approve to the zero address");
    require(_balances[msg.sender] >= value, "Insufficient balance");
    _allowed[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  function transferFrom(
    address from,
    address to,
    uint256 value
  ) external returns (bool) {
    require(_balances[from] >= value, "Insufficient balance");
    require(_allowed[from][msg.sender] >= value, "Insufficient allowance");
    _balances[from] -= value;
    _balances[to] += value;
    _allowed[from][msg.sender] -= value;
    emit Transfer(from, to, value);
    return true;
  }
}
