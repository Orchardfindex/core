async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(
    "0x35c7c18b854684c2ea522b0e052be0ac1fbc42b5"
  );

  console.log("Factory address:", factory.address);
}

main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);
