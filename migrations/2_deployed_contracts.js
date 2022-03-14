const NameRegisteringService = artifacts.require("NameRegisteringService");

module.exports = function (deployer) {
  deployer.deploy(NameRegisteringService);
};
