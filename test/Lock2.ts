import { expect } from 'chai'
import { loadFixture, time } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { parseGwei } from 'viem'
import { viem } from 'hardhat'
import { GetContractReturnType } from '@nomicfoundation/hardhat-viem/types'
import { Lock$Type } from '../artifacts/contracts/Lock.sol/Lock'

describe('Lock2', async function () {
  async function deployOneYearLockFixture() {
    const lockedAmount = parseGwei('1')
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60

    const unlockTime = BigInt((await time.latest()) + ONE_YEAR_IN_SECS)
    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const lock = await viem.deployContract('Lock', [unlockTime], {
      value: lockedAmount,
    })
    console.log('lock.address 0:', lock.address)
    const balance = await lock.read.balance()
    console.log('deployOneYearLockFixture ~ balance:', balance)
    return { lock, unlockTime }
  }

  // Does loadFixture() snapshot the state of the chain / data in the contract?
  async function commitLoadFixture(lock: GetContractReturnType<Lock$Type['abi']>, newBalance: bigint) {
    const balance = await lock.read.balance()
    console.log('before: deployOneYearLockFixture ~ balance:', balance)
    await lock.write.changeBalance([newBalance])
    const balance2 = await lock.read.balance()
    console.log('after: deployOneYearLockFixture ~ balance:', balance2)
  }

  it('Should set the right unlockTime', async function () {
    const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture)
    console.log('lock.address 1:', lock.address)
    expect(await lock.read.unlockTime()).to.equal(unlockTime)
    console.log('lock.address 1:', lock.address)
    await commitLoadFixture(lock, 1n)
  })

  it('Should revert with the right error if called too soon', async function () {
    const { lock } = await loadFixture(deployOneYearLockFixture)
    console.log('lock.address 2:', lock.address)
    await expect(lock.write.withdraw()).to.be.rejectedWith("You can't withdraw yet")
    console.log('lock.address 2:', lock.address)
    await commitLoadFixture(lock, 2n)
  })

  it('Should revert with the right error if called from another account', async function () {
    const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture)
    console.log('lock.address 3:', lock.address)

    const [owner, otherAccount] = await viem.getWalletClients()

    // we increase the time of the chain to pass the first check
    await time.increaseTo(unlockTime)

    // We use lock.connect() to send a transaction from another account
    // Case1:
    const lockAsOtherAccount = await viem.getContractAt('Lock', lock.address, { client: { wallet: otherAccount } })
    console.log('lock.address 4:', lockAsOtherAccount.address)
    await expect(lockAsOtherAccount.write.withdraw()).to.be.rejectedWith("You aren't the owner")
    // case2:
    await expect(lock.write.withdraw({ account: otherAccount.account })).to.be.rejectedWith("You aren't the owner")
    console.log('lock.address 4:', lockAsOtherAccount.address)
    await commitLoadFixture(lock, 3n)
  })
})
