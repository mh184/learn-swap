import { viem } from 'hardhat'
import { parseEther } from 'viem'

describe('Token', async function () {
  const tokenSupply = parseEther('1000000')
  const TOKEN_A_DECIMALS = 18n

  const tka = await viem.deployContract('Token', [
    'Token A',
    'TKA',
    tokenSupply,
    Number(TOKEN_A_DECIMALS)
  ])
})
