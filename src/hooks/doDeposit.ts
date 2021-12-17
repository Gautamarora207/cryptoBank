const Web3 = require('web3');

declare const window: any; 


export async function doDeposit(userNetwork:any, amount:string, owner: string | null) {

  console.log("inside do deposi function");

  console.log("userNetwork", userNetwork);
    
  if (window.ethereum) {
    try {
      console.log("inside try", Web3);

      // window.web3 = new Web3(window.web3.currentProvider);

      const something = await window.ethereum.send('eth_requestAccounts');

      console.log(something);
    // window.web3 = new Web3(window.ethereum);
    // return true;
      // const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"));

      // await window.ethereum.enable()

      // const wasAdded = await window.ethereum.request({
      //   method: 'wallet_addEthereumChain',
      //   params: [{
      //     chainId: '0x'+userNetwork.chainId.toString(16),
      //     chainName: userNetwork.name,
      //     nativeCurrency: {
      //         name: userNetwork.gasCurrency,
      //         symbol: userNetwork.gasCurrency,
      //         decimals: 18
      //     },
      //     rpcUrls: [userNetwork.rpcUrl],
      //     }]
      // });


      // console.log("======================", wasAdded);
      // const accounts = await window.web3.eth.getAccounts();


      // console.log("Account:", accounts);
      // await window.web3.eth.sendTransaction({
      //   from: accounts[0],
      //   to: owner,
      //   value: window.web3.utils.toWei(amount.toString(), 'ether')
      // });
      // console.log("Its coming here v2");
    } catch(e) {
      console.log(e);
      throw e;
    }
    
  }
}
