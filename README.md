# 奥多姆 NFT

## Goerli 测试网演示步骤

- Goerli 测试网可用地址(lyh address)

```js
0x5e5a60acd43cd5f3aa4f2507fa0a4bac4c8725a1;
```

### 1. 部署合约

```
yarn deploy --network testnet

// 部署的结果
$ hardhat run scripts/1_deploy.ts --network testnet
No need to generate any newer typings.
Deploying contract...
Contract deployed to: 0x60C6FF5cA1a588eafc92683C97e2c9f60b724705
✨  Done in 30.40s.
```

### 2. 铸造两个到指定地址

需要修改 `config/CollectionConfig.ts` 中的 `contractAddress`

```
PRE_MINT_ADDRESS=0x5E5A60aCd43cd5f3aA4F2507fa0A4bAc4c8725a1 yarn pre-mint --network testnet

// 铸造的结果
$ hardhat run scripts/01_pre_mint.ts --network testnet
No need to generate any newer typings.
pre mint success!
✨  Done in 51.38s.
```

### 3. 公开销售

```
yarn public-sale-open --network testnet

// 公开销售的结果
Updating the max mint amount per TX to 1...
Unpausing the contract...
Public sale is now open!
```

### 4.关闭公开销售

```
yarn public-sale-close --network testnet

// 关闭公开销售的结果
Pausing the contract...
Public sale is now closed!
```

### 5.揭幕

```
COLLECTION_URI_PREFIX=ipfs://bafybeiceqmznqdylhjunfunbmxp3nx4glyxbakgd3dtfiogwabsauia6rm/metadata/ yarn reveal --network testnet

// 揭幕结果
$ hardhat run scripts/8_reveal.ts --network testnet
No need to generate any newer typings.
Updating the URI prefix to: ipfs://bafybeiceqmznqdylhjunfunbmxp3nx4glyxbakgd3dtfiogwabsauia6rm/metadata/
Revealing the collection...
Your collection is now revealed!
✨  Done in 111.41s.
```
