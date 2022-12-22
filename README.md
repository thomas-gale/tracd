# Tracd
Traced supply chains for great good.

## Dev
```shell
# .env.local
NEXT_PUBLIC_MAPBOX_TOKEN=*****************
```

```shell
yarn dev
```

### beer.tracd. survey stack
- [pocketbase](https://pocketbase.io/docs/)
- Download `pocketbase` and extract executable to repo root.
- [linode](https://cloud.linode.com/linodes)
- `scp -r ./pb root@survey.tracd.co.uk:/root/pb` 
- Copy the systemd `./pb/pocketbase.service` into `/etc/systemd/system/`
- Update the `./src/env/config.ts` survey URL to match the hosted `linode` push deployment to cloud

### Hardhat
```shell
yarn hardhat help
yarn hardhat test
REPORT_GAS=true yarn  hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.ts
```

## Notes
- Treat all state in the system as NFT entities?
https://docs.openzeppelin.com/contracts/4.x/erc721

- Deploy to zkSync
https://v2-docs.zksync.io/dev/developer-guides/hello-world.html#initializing-the-project-deploying-a-smart-contract

- In the future, host own map tiles on IPFS somehow?
  - https://deck.gl/docs/developer-guide/base-maps/using-with-mapbox#hosting-your-own-basemap-service
