const PAKToken = artifacts.require("PAKToken");

module.exports = function (deployer) {
  deployer.deploy(PAKToken);
};
