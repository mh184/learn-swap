import { expect } from 'chai'
import {
  loadFixture,
  time
} from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { parseGwei } from 'viem'
import { viem } from 'hardhat'

describe('TokenSwap', async function () {
  async function deployTokenSwapFixture() {
    const swapRate = 5n
    const tokenSupply = 1000000n

    const tka = await viem.deployContract('Token', [
      'Token A',
      'TKA',
      tokenSupply
    ])
    const tkb = await viem.deployContract('Token', [
      'Token B',
      'TKB',
      tokenSupply
    ])
    const tokenSwapContract = await viem.deployContract('TokenSwap', [])
    const [user1, user2] = await viem.getWalletClients()
    tka.write.mint([user1.account.address, 100n])
    tkb.write.mint([user2.account.address, 100n])

    console.log('deployTokenSwapFixture ~ tka.address:', tka.address)
    console.log('deployTokenSwapFixture ~ tkb.address:', tkb.address)
    console.log(
      'deployTokenSwapFixture ~ tokenSwapContract.address:',
      tokenSwapContract.address
    )
    await tokenSwapContract.write.setSwapRate([
      '0x8a9143d0178C08D04337E2eb5D47893F39710A92',
      BigInt(5.55555 * Math.pow(10, 18))
    ])
    const s = await tokenSwapContract.read.getSwapRate([
      '0x8a9143d0178C08D04337E2eb5D47893F39710A92'
    ])
    console.log('deployTokenSwapFixture ~ s:', s)

    return { tka, tkb, tokenSwapContract, user1, user2 }
  }

  it('Should set the right unlockTime', async function () {
    const { tka } = await loadFixture(deployTokenSwapFixture)
    // console.log("lock.address 1:", lock.address);
    // expect(await lock.read.unlockTime()).to.equal(unlockTime);
    // console.log("lock.address 1:", lock.address);
    // await commitLoadFixture(lock, 1n);
  })
})
