// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConcealProtocol {

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function transfer(address payable _to) public payable {
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Ether not sent");
    }

    function deposit(uint256 amount) payable public {
        require(msg.value == amount);
    }
}