// @ts-ignore
import CollectionConfigInterface from "../lib/CollectionConfigInterface.ts";
// @ts-ignore
import * as Networks from "../lib/Networks.ts";
// @ts-ignore
import * as Marketplaces from "../lib/Marketplaces.ts";
// @ts-ignore
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  // testnet: Networks.hardhatLocal,
  testnet: Networks.ethereumTestnetGoerli,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "YourNftToken",
  tokenName: "My NFT Token",
  tokenSymbol: "MNT",
  // hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  hiddenMetadataUri:
    "ipfs://bafkreictmtoisazizfrqt2hicqn73owx6rjpguv3fczycjiv5c2crfpsui",
  maxSupply: 7777,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  // contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // 本地调试用, 上线部署需要替换
  contractAddress: "0xA6Eff17EE863237a69b2e83f89553C3fdB377491",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
