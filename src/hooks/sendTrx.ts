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
    setIsLoading(true);

    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/8376bb241320413b91dd2f592714dd8d"
      )
    );

    const estimateGasFees = async () => {
      const ethresult = await axios.get(
        `https://ethgasstation.info/api/ethgasAPI.json?api-key=0c07e8f02048b2d2802b50c726edf63f96bc58b2f10b07a8c8ce25c73d7e`
      );
      return { ethgasFees: ethresult.data };
    };

    const { ethgasFees } = await estimateGasFees();

    const fromAddressNonce = await web3.eth.getTransactionCount(
      owner,
      "pending"
    );

    console.log("===============", privateKey);
    console.log("===============", owner);
    var bufferPrivateKey = Buffer.from(privateKey, "hex");

    var rawTx = {
      nonce: web3.utils.toHex(fromAddressNonce),
      to: receiverAddress,
      value: web3.utils.numberToHex(web3.utils.toWei(`${amount}`, "ether")),
      gasPrice: web3.utils.toHex(
        web3.utils.toWei(`${ethgasFees.fast / 10}`, "Gwei")
      ),
      gasLimit: web3.utils.toHex("1000000"),
    };

    var tx = new Tx(rawTx, { chain: "rinkeby" });
    tx.sign(bufferPrivateKey);
    const serializedTx = tx.serialize();

    await web3.eth
      .sendSignedTransaction(`0x${serializedTx.toString("hex")}`)
      .on("receipt", function (receipt: any) {
        enqueueSnackbar("Funds transferred sucessfully", {
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
