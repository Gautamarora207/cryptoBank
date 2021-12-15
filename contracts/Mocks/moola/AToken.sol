pragma solidity ^0.5.0;

import "../../interfaces/IMoola.sol";
import "../ERC20Mock.sol";

contract AToken is IAToken, ERC20Mock {
  IERC20 public underlying;

  constructor(IERC20 _underlying) ERC20Mock() public {
    underlying = _underlying;
  }

  function redeem(uint256 _amount) external {
    _burn(msg.sender, _amount);
    underlying.transfer(msg.sender, _amount);
  }
}

