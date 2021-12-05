pragma solidity ^0.5.0;

import "../../interfaces/IMoola.sol";
import "../ERC20Mock.sol";
import "./AToken.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LendingPoolCore is ILendingPoolCore {
  address public aToken;
  address public token;

  constructor (AToken _aToken) public {
    aToken = address(_aToken);
    token = address(_aToken.underlying());
  }

  function getReserveATokenAddress(address _token) external view returns (address) {
    if (_token == token) {
      return aToken;
    }
    return address(0);
  }

  function deposit(address lender, uint256 amount) external {
    IERC20(token).transferFrom(lender, aToken, amount);
    ERC20Mock(aToken).mint(lender, amount);
  }
}

