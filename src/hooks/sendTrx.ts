const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


export async function sendTrx(privateKey: string, userNetwork:any, amount:string, owner: string, receiverAddress:string, enqueueSnackbar:any | null) {  
      
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"));
      
      let gasPrice;

      await web3.eth.getGasPrice(function(e:any, r:any) { gasPrice = r });


      var bufferPrivateKey = Buffer.from(privateKey.substring(2), 'hex');
      var rawTx = {
          nonce: await web3.eth.getTransactionCount(owner) + 1,
          gasPrice: gasPrice, 
          gasLimit: '0x2710',
          to: receiverAddress, 
          value: amount, 
          common: {
            customChain: {
              name: userNetwork.name,
              chainId: userNetwork.chainId,
              networkId: userNetwork.chainId
            }
          }
      };

      var tx = new Tx(rawTx);
      console.log(tx);
      tx.sign(bufferPrivateKey);

      var serializedTx = tx.serialize();

      web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
          .on('receipt', console.log).on('error', (e:any) =>
          enqueueSnackbar(e.message, {
            variant: "error",
            anchorOrigin: { horizontal: "center", vertical: "top" },
      }));
    } catch(e) {
      throw e;
    }

  }
  