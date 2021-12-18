const Web3 = require("web3");

declare const window: any;

export async function doDeposit(
  userNetwork: any,
  amount: string,
  owner: string | null,
  account?: string | null
) {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const data = await window.web3.eth.sendTransaction({
        from: account,
        to: owner,
        value: window.web3.utils.toWei(amount.toString(), "ether"),
      });
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
