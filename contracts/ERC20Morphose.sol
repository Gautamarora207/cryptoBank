pragma solidity 0.5.17;

import "./ERC20Tornado.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract ERC20Morphose is ERC20Tornado {
  using SafeERC20 for IERC20;
  using SafeMath for uint256;

  address public governance;
  uint256 public totalDepositBalance;

  constructor(
    IVerifier _verifier,
    IFeeManager _feeManager,
    uint256 _denomination,
    uint32 _merkleTreeHeight,
    address _owner,
    address _token,
    address _governance
  ) ERC20Tornado(_verifier, _feeManager, _denomination, _merkleTreeHeight, _owner, _token) public {
    governance = _governance;
  }

  function _processDeposit() internal {
    super._processDeposit();
    totalDepositBalance = totalDepositBalance.add(denomination);
  }

  function _processWithdraw(address payable _recipient, address payable _relayer, uint256 _relayer_fee, uint256 _refund) internal {
    super._processWithdraw(
      _recipient,
      _relayer,
      _relayer_fee,
      _refund
    );
    totalDepositBalance = totalDepositBalance.sub(denomination);
  }

  // @dev Claims extra tokens in contract to send back to governance
  // @param token The token address to claim
  function governanceClaim(IERC20 _token) external {
    uint256 balance = _token.balanceOf(address(this));
    uint256 claimable = balance;
    if (_isPoolToken(address(_token))) {
      claimable = balance.sub(totalDepositBalance);
    }
    require(claimable > 0, "Can't claim a 0 amount");
    _token.safeTransfer(governance, claimable);
  }

  function _isPoolToken(address _token) internal returns (bool) {
    return _token == token;
  }
}
