import ERC20 from "../abis/ERC20.json";
import { toHex } from "../utils/snarks-functions";

export async function sendTrx(privateKey: string, amount:string, owner: string, receiverAddress:string | null) {  
      
    const Web3 = require('web3');
    const Tx = require('ethereumjs-tx');

    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"));
    // let contract = new web3.eth.Contract(ERC20.abi, tokenAddress);

    var key = Buffer.from(privateKey); 

    const gasPrice = 10;
    const gasPriceHex = toHex(gasPrice);
    const gasLimitHex = toHex(3000000);

    var tra = {
        gasPrice: gasPriceHex,
        gasLimit: gasLimitHex,
        data: '',
        from: owner
    };

    var tx = new Tx(tra);
    tx.sign(key);

    var stx = tx.serialize();
    web3.eth.sendRawTransaction('0x' + stx.toString('hex'), (err:any, hash:any) => {
        if (err) { console.log(err); return; }
        console.log('contract creation tx: ' + hash);
    });
  }
  