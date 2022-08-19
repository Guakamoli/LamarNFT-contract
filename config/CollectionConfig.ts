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
  contractName: "LamarMetaverse",
  tokenName: "Lamar Metaverse Nft Token",
  tokenSymbol: "LMNT",
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
  contractAddress: "some_contract_address",
  marketplaceIdentifier: "lamar-metaverse-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
