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
Deploying contract...
Contract deployed to: 0xA6Eff17EE863237a69b2e83f89553C3fdB377491
```

### 2. 铸造两个到指定地址

```
PRE_MINT_ADDRESS=0x5E5A60aCd43cd5f3aA4F2507fa0A4bAc4c8725a1 yarn pre-mint --network testnet

// 铸造的结果
No need to generate any newer typings.
pre mint success!
✨  Done in 36.73s.
```

### 3. 公开销售

```
yarn public-sale-open --network testnet

Updating the max mint amount per TX to 1...
Unpausing the contract...
Public sale is now open!
```

### 4.关闭公开销售

```
yarn public-sale-close --network testnet

Pausing the contract...
Public sale is now closed!
```

### 5.揭幕

```
COLLECTION_URI_PREFIX=ipfs://bafybeifdj3xhzbl67537lp44yqvs53sw5y4mn5ffwjk7vfkxqzi3u26qve/metadata/ yarn reveal --network testnet


// 结果
Updating the URI prefix to: ipfs://bafybeigyux7vso6g6lveg4bpkcfbjtfqvva4cwl2hgj4qbgp3sdwht4wn4/metadata/
Revealing the collection...
Your collection is now revealed!
```
