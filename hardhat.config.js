require("@nomiclabs/hardhat-waffle");

const INFURA_PROJECT_ID = "c7ce7a5669d84a85baadeef6745d1c10";
const RINKEBY_PRIVATE_KEY = "26168d4f7468677103739364964828a4921972097536a491e4539ff7813cc2ca";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  paths: {
    sources: "./contract_ABI",
    artifacts: "./src/artifacts"
  },
  solidity: "0.6.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};

