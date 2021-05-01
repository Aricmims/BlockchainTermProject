require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.6.0",
};

/*
require("@nomiclabs/hardhat-waffle");

const INFURA_PROJECT_ID = "project id";
const RINKEBY_PRIVATE_KEY = "metamask private key";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  paths: {
    sources: "./contract_ABI",
    artifacts: "./artifacts"
  },
  solidity: "0.6.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
*/
