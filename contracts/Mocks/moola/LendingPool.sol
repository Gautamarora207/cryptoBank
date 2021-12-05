pragma solidity ^0.5.0;

import "../../interfaces/IMoola.sol";
import "./LendingPoolCore.sol";

contract LendingPool {
  LendingPoolCore core;

  constructor (LendingPoolCore _core) public {
    core = _core;
  }

  function deposit(
    address _reserve,
    uint256 _amount,
    uint16 _moolaReferralCode
  ) external payable {
    if (_reserve == core.token() && _moolaReferralCode == 4005) {
      core.deposit(msg.sender, _amount);
    }
  }
}


