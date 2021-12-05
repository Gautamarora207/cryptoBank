// SPDX-License-Identifier: MIT

pragma solidity ^0.5.17;

// Interfaces in this file come from Moola.

interface IAToken {
  function redeem(uint256 _amount) external;
}

interface ILendingPoolCore {
  function getReserveATokenAddress(address _reserve)
    external
    view
    returns (address);
}

interface ILendingPool {
  function deposit(
    address _reserve,
    uint256 _amount,
    uint16 _referralCode
  ) external payable;
}
