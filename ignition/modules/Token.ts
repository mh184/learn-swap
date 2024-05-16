import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenSupply = 1000000;

const TokenModule = buildModule("TokenModule", (m) => {
  const lock = m.contract("Token", ["Token A", "TKA", tokenSupply], {
    value: 1n,
  });

  return { lock };
});

export default TokenModule;
