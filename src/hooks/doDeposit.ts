const Web3 = require("web3");

declare const window: any;

export async function doDeposit(
  userNetwork: any,
  amount: string,
  owner: string | null,
  enqueueSnackbar: any,
  setIsLoading: any
) {
  if (window.ethereum) {
    try {
      setIsLoading(true);
      await window.ethereum.enable();
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await window.web3.eth.getAccounts();
      await window.web3.eth
        .sendTransaction({
          from: accounts[0],
          to: owner,
          value: window.web3.utils.toWei(amount.toString(), "ether"),
        })
        .on("receipt", function (receipt: any) {
          enqueueSnackbar("Deposit Successful", {
            variant: "success",
            anchorOrigin: { horizontal: "center", vertical: "top" },
          });
          setIsLoading(false);
        })
        .on("error", console.error);
    } catch (e: any) {
      setIsLoading(false);
      enqueueSnackbar(e.message, {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
      throw e;
    }
  }
}
