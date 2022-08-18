import NftContractProvider from "../lib/NftContractProvider";

async function main() {
  const contract = await NftContractProvider.getContract();

  if (!process.env.PRE_MINT_ADDRESS) {
    console.log("pre mint address not found. use `MINT_ADDRESS=0x?`");
  }

  const mintAddress = String(process.env.MINT_ADDRESS);
  const preMintMaxAmount = 2777;
  await contract.setMaxMintAmountPerTx(preMintMaxAmount);
  await contract.mintForAddress(preMintMaxAmount, mintAddress);
  console.log("pre mint success!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
