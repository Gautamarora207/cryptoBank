const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "peasant average century spot century coast claw mobile curious alpha sibling match";

module.exports = {
  contracts_build_directory: path.join(__dirname, "build"),
  networks: {
    development: {
      network_id :"*",
      host:"localhost",
        port: 7545
    },
    rinkeby: {
      networkCheckTimeout: 10000, 
      provider: function() {
        return new HDWalletProvider(
          mnemonic,"https://rinkeby.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f");
      },
      network_id: 4,
      skipDryRun: true

    },
    aurora: {
      provider: () => setupWallet('https://testnet.aurora.dev'),
      network_id: 0x4e454153,
      gas: 10000000,
      from: '0x6A33382de9f73B846878a57500d055B981229ac4' // CHANGE THIS ADDRESS
    },
  },

  compilers: {
    solc: {
      version: "0.8.0",    
    }
  }
};
