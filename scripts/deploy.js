async function main() {

    const [deployer] = await ethers.getSigners("localhost:8545");

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const BDF = await ethers.getContractFactory("Betting");
    const BD = await BDF.deploy();

    console.log("Betting contract address:", BD.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

/*
npx hardhat run --network rinkeby scripts/deploy.js
Deploying contracts with the account: 0x
Account balance:
Betting contract address:
*/
