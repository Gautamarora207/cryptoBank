import { useMemo } from "react";
import ConcealProtocol from "../abis/ConcealProtocol.json";

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
      "https://rinkeby.infura.io/v3/8376bb241320413b91dd2f592714dd8d"
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
    const formatOtherCurrency = web3.utils.fromWei(result);
    return parseFloat((Math.round(formatOtherCurrency * 100) / 100).toFixed(2));
  } else if (currency.includes("eth")) {

    let contract = new web3.eth.Contract(ConcealProtocol.abi, "0x978cA787FbbA0F386A28b8783ca3DA35b8012000");
    let balance:any;
    await contract.methods.getUserBalance()
      .call({
        from: owner, 
      }).then((res:any) => {
        if(res == undefined){ 
          balance = 0;
          return 0;
        } else {
          let formatETH = web3.utils.fromWei(res, "ether");
          balance = parseFloat(parseFloat(formatETH).toFixed(4))
        }
      })
    .catch((err:any) =>  {
    
    });
    return balance;
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
