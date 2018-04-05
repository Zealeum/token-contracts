var ZealeumToken = artifacts.require("./ZealeumToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ZealeumToken);
};

