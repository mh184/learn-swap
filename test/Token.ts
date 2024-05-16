import { viem } from 'hardhat'

describe('Token', async function () {
  const tokenSupply = 1000000n

  const tka = await viem.deployContract('Token', [
    'Token A',
    'TKA',
    tokenSupply
  ])
})
