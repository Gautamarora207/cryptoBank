declare const window: any; 

export async function doDeposit(userNetwork:any, amount:string, owner: string | null) {

  const Web3 = require('web3');

  if (window.web3) {
    try {
      window.web3 = new Web3(window.web3.currentProvider);
      await window.ethereum.enable();

      const wasAdded = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x'+userNetwork.chainId.toString(16),
          chainName: userNetwork.name,
          nativeCurrency: {
              name: userNetwork.gasCurrency,
              symbol: userNetwork.gasCurrency,
              decimals: 18
          },
          rpcUrls: [userNetwork.rpcUrl],
          }]
      });

      const accounts = await window.web3.eth.getAccounts();

      await window.web3.eth.sendTransaction({
        from: accounts[0],
        to: owner,
        value: window.web3.utils.toWei(amount.toString(), 'ether')
      });
    } catch(e) {
      throw e;
    }
    
  }
}
