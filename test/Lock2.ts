import { expect } from 'chai'
import hre from 'hardhat'
import { time } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { parseGwei } from 'viem'

describe('Lock2', function () {
  it('Should set the right unlockTime', async function () {
    const lockedAmount = parseGwei('1')
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60
    const unlockTime = BigInt((await time.latest()) + ONE_YEAR_IN_SECS)

    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const lock = await hre.viem.deployContract('Lock', [unlockTime], {
      value: lockedAmount,
    })

    // assert that the value is correct
    expect(await lock.read.unlockTime()).to.equal(unlockTime)
  })
})
