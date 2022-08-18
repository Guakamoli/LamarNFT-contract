// @ts-ignore
import CollectionConfigInterface from "../lib/CollectionConfigInterface.ts";
// @ts-ignore
import * as Networks from "../lib/Networks.ts";
// @ts-ignore
import * as Marketplaces from "../lib/Marketplaces.ts";
// @ts-ignore
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'YourNftToken',
  tokenName: 'My NFT Token',
  tokenSymbol: 'MNT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 7777,
  royaltyFraction: 250,
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
  contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
