/* global artifacts */
require("dotenv").config({ path: "../.env" });
const ERC20Morphose = artifacts.require("ERC20Morphose");
const hasherContract = artifacts.require("Hasher");
const ERC20Mock = artifacts.require("ERC20Mock");

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const {
  MERKLE_TREE_HEIGHT,
  ERC20_TOKEN,
  TOKEN_AMOUNT,
  VERIFIER,
  FEE_MANAGER,
  GOVERNANCE,
} = process.env;

module.exports = function (deployer, network, accounts) {
  return deployer.then(async () => {
    const hasherInstance = await hasherContract.deployed();
    await ERC20Morphose.link(hasherContract, hasherInstance.address);
    let token = ERC20_TOKEN;
    if (token === "" || network === "development") {
      const tokenInstance = await deployer.deploy(ERC20Mock);
      token = tokenInstance.address;
    }

    console.log(
      `Deploying ERC20Morphose with token ${ERC20_TOKEN} and denomination ${TOKEN_AMOUNT}`
    );

    const morphose = await deployer.deploy(
      ERC20Morphose,
      VERIFIER,
      FEE_MANAGER,
      TOKEN_AMOUNT,
      MERKLE_TREE_HEIGHT,
      ZERO_ADDRESS,
      token,
      GOVERNANCE,
    { gas: 5000000 }
    );
    
    console.log("ERC20Morphose's address ", morphose.address);
  });
};
