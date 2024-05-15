import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'
import 'solidity-coverage'

const config: HardhatUserConfig = {
  solidity: '0.8.24',
}

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const wallets = await hre.viem.getWalletClients();
  for (const wallet of wallets) {
    console.log(wallet.account.address);
  }
});

export default config
