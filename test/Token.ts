import hre from 'hardhat'

describe('Token', async function () {
  const token = await hre.viem.deployContract('Token', [])
  token.read.totalSupply()
})
