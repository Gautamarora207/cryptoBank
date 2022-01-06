import ConcealProtocol from "../abis/ConcealProtocol.json";

const Web3 = require("web3");
const axios = require("axios");


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
      // await window.ethereum.enable();
      const accounts = await window.web3.eth.getAccounts();

      
   

      const estimateGasFees = async () => {
        const ethresult = await axios.get(
          `https://ethgasstation.info/api/ethgasAPI.json?api-key=0c07e8f02048b2d2802b50c726edf63f96bc58b2f10b07a8c8ce25c73d7e`
        );
        return { ethgasFees: ethresult.data };
      };
  
      const { ethgasFees } = await estimateGasFees();

    let contract = new window.web3.eth.Contract(ConcealProtocol.abi, "0x978cA787FbbA0F386A28b8783ca3DA35b8012000");
    const result = await contract.methods.deposit(owner, window.web3.utils.toWei(`${amount}`, "ether"))
    .send({
      from: accounts[0], 
      value: window.web3.utils.toWei(`${amount}`, "ether"),
      gasPrice: window.web3.utils.toHex(
        window.web3.utils.toWei(`${ethgasFees.fast / 10}`, "Gwei")
      ),
      gas: window.web3.utils.toHex("1000000"),
     })
      .then((res:any) => {
        enqueueSnackbar("Funds transferred sucessfully", {
          variant: "success",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
          console.log('Success', res)
      })
      .catch((err:any) =>  {
        enqueueSnackbar(err.message, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
        console.log(err)}) 
    console.log(result);
    setIsLoading(false);


      // await window.web3.eth
      //   .sendTransaction({
      //     from: accounts[0],
      //     to: owner,
      //     value: window.web3.utils.toWei(amount.toString(), "ether"),
      //   })
      //   .on("receipt", function (receipt: any) {
      //     enqueueSnackbar("Deposit Successful", {
      //       variant: "success",
      //       anchorOrigin: { horizontal: "center", vertical: "top" },
      //     });
      //     setIsLoading(false);
      //   })
      //   .on("error", console.error);
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
