const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

// ropsten factory address: 0xF1502761B3f18aa2472a792aA825bAEC3caC339b
// init_CODE_HASH: 0xd325580f03a82df1ca59e8c6db00c6c9a9d207d54af9b12bb6ab0cd416a9a2e6 bytes32
