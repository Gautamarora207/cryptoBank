import ERC20 from "../abis/ERC20.json";

declare const window: any; 

export async function doDeposit(tokenAddress: string,currency:string,chainId: string, amount:string, owner: string | null) {

  const Web3 = require('web3');

  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.enable();

    const wasAdded = await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: chainId,
        chainName: 'Binance Smart Chain',
        nativeCurrency: {
            name: currency,
            symbol: currency,
            decimals: 18
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        // blockExplorerUrls: ['https://bscscan.com']
        }]
    });
    // await window.web3.eth.sendTransaction({
    //   from: "0x5050d1f28B0c4ACD15710C176f6ACDDc01B2ba27",
    //   to: owner,
    //   value: window.web3.utils.toWei("10", 'ether')

    // });
  
  }
  
//  const web3 = new Web3(window.web3 || new Web3.providers.HttpProvider( "https://mainnet.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"));
  
  let contract = new window.web3.eth.Contract(ERC20.abi, tokenAddress);
  console.log(contract);
  try {
    const result = await contract.methods.approve(owner, 10).call();
    let format = window.web3.utils.fromWei(result); 
    return parseFloat((Math.round(format * 100) / 100).toFixed(2));
  } catch(e) {
    console.error(e);
    return -1;
  }
}
