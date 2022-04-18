require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const ALCHEMY_API = process.env.ALCHEMY_HTTP;
const SECRET = process.env.SECRET;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.16" },
      { version: "0.7.6" },
      { version: "0.8.4" },
    ],
  },
  networks: {
    ropsten: {
      url: `${ALCHEMY_API}`,
      accounts: [`0x${SECRET}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API}`,
  },
};
