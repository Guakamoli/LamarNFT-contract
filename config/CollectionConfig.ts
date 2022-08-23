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
  contractName: "LamarOdomMetaverse",
  tokenName: "Lamar Odom's Metaverse Token",
  tokenSymbol: "LOMT",
  // hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  hiddenMetadataUri:
    "ipfs://bafkreid533zkyqlqtuh3ufod7seck7hpnahx2xuofxx462xhnv2wjgc7fi",
  maxSupply: 7777,
  royaltyFraction: 250,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "some_contract_address",
  marketplaceIdentifier: "lamar-odom-metaverse-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
