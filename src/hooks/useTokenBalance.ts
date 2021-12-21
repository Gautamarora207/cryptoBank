import { useMemo } from "react";
import ERC20 from "../abis/ERC20.json";
import { useContractKit } from "@celo-tools/use-contractkit";
import { AbiItem } from "web3-utils";

export async function useTokenBalance(
  tokenAddress: string,
  currency: string,
  owner?: string | null
) {
  const Web3 = require("web3");
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"
    )
  );

  const { kit } = useContractKit();
  const tokenContract = useMemo(() => {
    return new kit.web3.eth.Contract(
      ERC20.abi as unknown as AbiItem,
      tokenAddress
    );
  }, [tokenAddress, kit]);

  if (
    currency.includes("celo") ||
    currency.includes("cusd") ||
    currency.includes("ceur")
  ) {
    const result = await tokenContract.methods.balanceOf(owner).call();
    const format = web3.utils.fromWei(result);
    return parseFloat((Math.round(format * 100) / 100).toFixed(2));
  } else if (currency.includes("eth")) {
    let format = 0;
    await web3.eth.getBalance(owner, function (err: any, result: any) {
      if (err) {
        console.error(err);
      } else {
        format = web3.utils.fromWei(result, "ether");
      }
    });
    return parseFloat((Math.round(format * 100) / 100).toFixed(2));
  } else {
    let contract = new web3.eth.Contract(ERC20.abi, tokenAddress);
    try {
      const result = await contract.methods.balanceOf(owner).call();
      let format = web3.utils.fromWei(result);
      return parseFloat((Math.round(format * 100) / 100).toFixed(2));
    } catch (e) {
      return -1;
    }
  }
}
