pragma solidity 0.5.17;

import "./ERC20Morphose.sol";
import "./interfaces/IMoola.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

/*
ERC20MMorphose is a Morphose pool that does automatic conversion for Moola mTokens
*/
contract ERC20MMorphose is ERC20Morphose {
  using SafeERC20 for IERC20;
  using SafeMath for uint256;

  uint16 public constant MOOLA_REFERRAL_CODE = 4005;

  ILendingPoolCore public core;
  ILendingPool public pool;
  IAToken public aToken;

  constructor(
    IVerifier _verifier,
    IFeeManager _feeManager,
    uint256 _denomination,
    uint32 _merkleTreeHeight,
    address _owner,
    address _token,
    address _governance,
    ILendingPoolCore _core,
    ILendingPool _pool
  ) ERC20Morphose(_verifier, _feeManager, _denomination, _merkleTreeHeight, _owner, _token, _governance) public {
    core = _core;
    pool = _pool;
    aToken = IAToken(core.getReserveATokenAddress(token));
  }

  function _processDeposit() internal {
    super._processDeposit();

    // Convert to Moola tokens
    IERC20(token).safeApprove(address(core), denomination);
    pool.deposit(token, denomination, MOOLA_REFERRAL_CODE);
  }

  function _processWithdraw(address payable _recipient, address payable _relayer, uint256 _relayer_fee, uint256 _refund) internal {
    // Convert from Moola tokens
    aToken.redeem(denomination);
    super._processWithdraw(
      _recipient,
      _relayer,
      _relayer_fee,
      _refund
    );
  }
  
  function _isPoolToken(address _token) internal returns (bool) {
    return _token == address(aToken);
  }
}
