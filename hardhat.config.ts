import { HardhatUserConfig, task, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'
import 'solidity-coverage'

const INFURA_API_KEY = vars.get('INFURA_API_KEY')
const SEPOLIA_PRIVATE_KEY = vars.get('SEPOLIA_PRIVATE_KEY')

const ETHERSCAN_API_KEY = vars.get('ETHERSCAN_API_KEY')

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
}

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const wallets = await hre.viem.getWalletClients()
  for (const wallet of wallets) {
    console.log(wallet.account.address)
  }
})

export default config
