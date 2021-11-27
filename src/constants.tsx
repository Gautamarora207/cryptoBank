import { ChainId } from "@celo-tools/use-contractkit";

export const CURRENCY_MAP: Record<any, Record<string, string>> = {
  [ChainId.Mainnet]: {
    celo: "0x471ece3750da237f93b8e339c536989b8978a438",
    // cusd: "0x1410d4ec3d276c0ebbf16ccbe88a4383ae734ed0",
    // ceur: "0x57a139c6f0a1b125c172c7690cd9a350828b7607"
  },
  [250] : {
      ftm: "0x4e15361fd6b4bb609fa63c81a2be19d873717870"
  },
  [43114] : {
      avax: "0x73a312acefb4730a30d18c40aebc617d93c1bfbb"
  },
  [137] : {
      matic: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
  },
  [1] : {
      eth: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"
  }
};

export const supportedNetworkNames:any = [
    "Celo",
    "Fantom",
    "Avalanche",
    "Polygon",
    "Ethereum",
];

export const networkChainIds:any = [
    42220,
    250,
    43114,
    137,
    1
];

export const networkGasCurrencys:any =[
    'CELO',
    'FTM',
    'AVAX',
    'MATIC',
    'ETH'
];