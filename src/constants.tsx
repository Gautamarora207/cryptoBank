import {
  ChainId,
  SupportedProviders,
  WalletTypes,
} from "@celo-tools/use-contractkit";
import { defaultScreens } from "@celo-tools/use-contractkit/lib/screens";

export const CURRENCY_MAP: Record<any, Record<string, string>> = {
  [1313161554]: {
    Aurora: "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
    WETH: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    USDT: "0x4988a896b1227218e4A686fdE5EabdcAbd91571f",
    USDC: "0xB12BFcA5A55806AaF64E99521918A4bf0fC40802",
    DAI: "0xe3520349F477A5F6EB06107066048508498A291b",
  },
  [250]: {
    FTM: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    fETH: "0x658b0c7613e890ee50b8c4bc6a3f41ef411208ad",
    fUSDT: "0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5",
    USDC: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    DAI: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
    MIM: "0x82f0b8b456c1a451378467398982d4834b6829c1",
  },
  [43114]: {
    AVAX: "0x73a312acefb4730a30d18c40aebc617d93c1bfbb",
  },
  [137]: {
    MATIC: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  },
  [4]: {
    ETH: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
  },
};

export const supportedNetworkNames: any = [
  "Aurora",
  "Fantom",
  "Avalanche",
  "Polygon",
  "Rinkeby",
];

export const networkChainIds: any = [1313161554, 250, 43114, 137, 4];

export const networkGasCurrencys: any = [
  "AURORA",
  "FTM",
  "AVAX",
  "MATIC",
  "ETH",
];

export const networkRPCUrls = [
  "https://mainnet.aurora.dev",
  "https://rpc.ftm.tools",
  "https://api.avax.network/ext/bc/C/rpc",
  "https://polygon-rpc.com",
  "https://rinkeby.infura.io/v3/8376bb241320413b91dd2f592714dd8d",
];
