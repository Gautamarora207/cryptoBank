import ConcealProtocol from "../abis/ConcealProtocol.json";
import { networkChainIds, networkRPCUrls, SMART_CONTRACT_ADDRESS_MAP } from "../constants";

const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const { Transaction } = require("@ethereumjs/tx");
const axios = require("axios");

export async function sendTrx(
  privateKey: string,
  userNetwork: any,
  amount: string,
  owner: string,
  receiverAddress: string,
  enqueueSnackbar: any | null,
  setIsLoading: any
) {
  try {
    console.log(userNetwork);
    setIsLoading(true);


    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        networkRPCUrls[
          networkChainIds.indexOf(userNetwork.chainId)
        ]
      )
    );

    const estimateGasFees = async () => {
      const ethresult = await axios.get(
        `https://ethgasstation.info/api/ethgasAPI.json?api-key=0c07e8f02048b2d2802b50c726edf63f96bc58b2f10b07a8c8ce25c73d7e`
      );
      return { ethgasFees: ethresult.data };
    };

    const { ethgasFees } = await estimateGasFees();
    await web3.eth.accounts.wallet.add(privateKey);

    let contract = new web3.eth.Contract(ConcealProtocol.abi,  SMART_CONTRACT_ADDRESS_MAP[userNetwork.chainId]);

    const result = await contract.methods.transfer(receiverAddress, web3.utils.toWei(`${amount}`, "ether"),)
    .send({
      from: owner, 
      gasPrice: web3.utils.toHex(
       web3.utils.toWei(`${ethgasFees.fast / 2 }`, "Gwei")
      ),
      gas: web3.utils.toHex("1000000"),
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
    
  } catch (e: any) {
    setIsLoading(false);
    enqueueSnackbar(e.message, {
      variant: "error",
      anchorOrigin: { horizontal: "center", vertical: "top" },
    });
    throw e;
  }
}
