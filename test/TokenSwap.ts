import { privateKeyToAccount } from 'viem/accounts'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { viem } from 'hardhat'
import { createWalletClient, parseEther, zeroAddress } from 'viem'

describe('TokenSwap', async function () {
  function withoutDecimal(amount: bigint, decimals: bigint) {
    return amount / BigInt(Math.pow(10, Number(decimals)))
  }
  async function deployTokenSwapFixture() {
    const TOKEN_A_DECIMALS = 18n
    const TOKEN_B_DECIMALS = 16n
    const swapRateTokenA = parseEther('0.02')
    const swapRateTokenB = parseEther('0.05')
    const weiToBuyTokenA = parseEther('0.2')
    const weiToBuyTokenB = parseEther('1')
    const tokenSupplyA =
      parseEther('12345') / BigInt(Math.pow(10, 18 - Number(TOKEN_A_DECIMALS)))
    const tokenSupplyB =
      parseEther('54321') / BigInt(Math.pow(10, 18 - Number(TOKEN_B_DECIMALS)))

    const [admin, user, tokenOwner] = await viem.getWalletClients()

    // Deploy contract
    const tka = await viem.deployContract(
      'Token',
      ['Token A', 'TKA', tokenSupplyA, Number(TOKEN_A_DECIMALS)],
      { client: { wallet: tokenOwner } }
    )
    const tkb = await viem.deployContract(
      'Token',
      ['Token B', 'TKB', tokenSupplyB, Number(TOKEN_B_DECIMALS)],
      { client: { wallet: tokenOwner } }
    )
    const tokenSaleAContract = await viem.deployContract(
      'TokenSale',
      [tka.address, swapRateTokenA],
      { client: { wallet: tokenOwner } }
    )
    const tokenSaleBContract = await viem.deployContract(
      'TokenSale',
      [tkb.address, swapRateTokenB],
      { client: { wallet: tokenOwner } }
    )
    const tokenSwapContract = await viem.deployContract('TokenSwap', [])

    // tokenOwner approves the tokenSale contract to spend their tokens
    await tka.write.approve([tokenSaleAContract.address, tokenSupplyA])
    await tkb.write.approve([tokenSaleBContract.address, tokenSupplyB])

    // Admin deposits some tokens to the swap contract
    await tokenSaleAContract.write.deposit({
      value: weiToBuyTokenA,
      account: admin.account
    })
    await tokenSaleBContract.write.deposit({
      value: weiToBuyTokenB,
      account: admin.account
    })
    await tka.write.transfer(
      [
        tokenSwapContract.address,
        await tka.read.balanceOf([admin.account.address])
      ],
      {
        account: admin.account
      }
    )
    await tkb.write.transfer(
      [
        tokenSwapContract.address,
        await tkb.read.balanceOf([admin.account.address])
      ],
      {
        account: admin.account
      }
    )
    // Admin transfer ether to the swap contract
    await admin.sendTransaction({
      to: tokenSwapContract.address,
      value: parseEther('34.5')
    })

    // User deposits some tokens to their account
    await tokenSaleAContract.write.deposit({
      value: weiToBuyTokenA,
      account: user.account
    })
    await tokenSaleBContract.write.deposit({
      value: weiToBuyTokenB,
      account: user.account
    })

    // Admin set the swap rate for token
    await tokenSwapContract.write.setSwapRate([tka.address, swapRateTokenA])
    await tokenSwapContract.write.setSwapRate([tkb.address, swapRateTokenB])

    return {
      tka,
      tkb,
      tokenSwapContract,
      admin,
      user,
      TOKEN_A_DECIMALS,
      TOKEN_B_DECIMALS,
      weiToBuyTokenA,
      weiToBuyTokenB,
      swapRateTokenA,
      swapRateTokenB
    }
  }

  describe('Deployment', function () {
    it('Should deposit tokens to the swap contract exactly', async function () {
      const {
        tka,
        tkb,
        tokenSwapContract,
        TOKEN_A_DECIMALS,
        TOKEN_B_DECIMALS,
        weiToBuyTokenA,
        weiToBuyTokenB,
        swapRateTokenA,
        swapRateTokenB,
        user
      } = await loadFixture(deployTokenSwapFixture)
      const expectedTokenAOfSwapContract = weiToBuyTokenA / swapRateTokenA
      const expectedTokenBOfSwapContract = weiToBuyTokenB / swapRateTokenB
      expect(
        withoutDecimal(
          await tka.read.balanceOf([tokenSwapContract.address]),
          TOKEN_A_DECIMALS
        )
      ).to.equal(expectedTokenAOfSwapContract)
      expect(
        withoutDecimal(
          await tkb.read.balanceOf([tokenSwapContract.address]),
          TOKEN_B_DECIMALS
        )
      ).to.equal(expectedTokenBOfSwapContract)
    })

    it('Should deposit tokens to the users exactly', async function () {
      const {
        tka,
        tkb,
        user,
        TOKEN_A_DECIMALS,
        TOKEN_B_DECIMALS,
        weiToBuyTokenA,
        weiToBuyTokenB,
        swapRateTokenA,
        swapRateTokenB
      } = await loadFixture(deployTokenSwapFixture)
      const expectedTokenAOfUser = weiToBuyTokenA / swapRateTokenA
      const expectedTokenBOfUser = weiToBuyTokenB / swapRateTokenB
      expect(
        withoutDecimal(
          await tka.read.balanceOf([user.account.address]),
          TOKEN_A_DECIMALS
        )
      ).to.equal(expectedTokenAOfUser)
      expect(
        withoutDecimal(
          await tkb.read.balanceOf([user.account.address]),
          TOKEN_B_DECIMALS
        )
      ).to.equal(expectedTokenBOfUser)
    })

    it('Should set the swap rate exactly', async function () {
      const { tka, tkb, tokenSwapContract, swapRateTokenA, swapRateTokenB } =
        await loadFixture(deployTokenSwapFixture)
      expect(await tokenSwapContract.read.getSwapRate([tka.address])).to.equal(
        swapRateTokenA
      )
      expect(await tokenSwapContract.read.getSwapRate([tkb.address])).to.equal(
        swapRateTokenB
      )
    })
  })

  describe('Swap', function () {
    // should decrease token A balance and increase token B balance of the user after swap A to B
    // should decrease ether balance and increase token B balance of the user after swap ether to B
    // should decrease token A balance and increase ether balance of the user after swap A to ether
    // should reject if the user doesn't have enough token A when swap from A
    // should reject if the user doesn't have enough ether when swap from ether
    // should reject if the user swap from token A with amount equal to 0
    // should reject if the user swap from address 0 to address 0
    // should reject if the user swap from ether to token B with value equal to 0

    it('Should decrease token A balance and increase token B balance of the user after swap A to B', async function () {
      const {
        tka,
        tkb,
        tokenSwapContract,
        user,
        TOKEN_A_DECIMALS,
        TOKEN_B_DECIMALS,
        swapRateTokenA,
        swapRateTokenB
      } = await loadFixture(deployTokenSwapFixture)
      const amountTokenAOfUser = await tka.read.balanceOf([
        user.account.address
      ])
      const amountTokenBOfUser = await tkb.read.balanceOf([
        user.account.address
      ])

      const expectedTokenBIncreaseOfUserAfterSwap =
        (withoutDecimal(amountTokenAOfUser, TOKEN_A_DECIMALS) *
          swapRateTokenA *
          BigInt(Math.pow(10, Number(TOKEN_B_DECIMALS)))) /
        swapRateTokenB

      await tka.write.approve([tokenSwapContract.address, amountTokenAOfUser], {
        account: user.account
      })
      await tokenSwapContract.write.swap(
        [tka.address, tkb.address, amountTokenAOfUser],
        { account: user.account }
      )

      expect(await tka.read.balanceOf([user.account.address])).to.equal(0n)
      expect(await tkb.read.balanceOf([user.account.address])).to.equal(
        amountTokenBOfUser + expectedTokenBIncreaseOfUserAfterSwap
      )
      const swapEvents = await tokenSwapContract.getEvents.Swap()
      expect(swapEvents).to.have.lengthOf(1)
      expect(swapEvents[0].args.sender?.toLowerCase()).to.equal(
        user.account.address
      )
      expect(swapEvents[0].args.amount).to.equal(amountTokenAOfUser)
      expect(swapEvents[0].args.receivedAmount).to.equal(
        expectedTokenBIncreaseOfUserAfterSwap
      )
    })

    it('Should decrease ether balance and increase token B balance of the user after swap ether to B', async function () {
      const { tkb, tokenSwapContract, user, TOKEN_B_DECIMALS, swapRateTokenB } =
        await loadFixture(deployTokenSwapFixture)
      const weiUseToSwap = parseEther('0.5')
      const publicClient = await viem.getPublicClient()
      const amountEtherOfUser = await publicClient.getBalance({
        address: user.account.address
      })
      const amountTokenBOfUser = await tkb.read.balanceOf([
        user.account.address
      ])
      const expectedTokenBIncreaseOfUserAfterSwap =
        (weiUseToSwap * BigInt(Math.pow(10, Number(TOKEN_B_DECIMALS)))) /
        swapRateTokenB
      const transactionHash = await tokenSwapContract.write.swap(
        [zeroAddress, tkb.address, 1n],
        { account: user.account, value: weiUseToSwap }
      )
      // get gas used of the transaction
      const receipt = await publicClient.getTransactionReceipt({
        hash: transactionHash
      })
      const gas = receipt.gasUsed * receipt.effectiveGasPrice
      expect(
        await publicClient.getBalance({ address: user.account.address })
      ).to.equal(amountEtherOfUser - weiUseToSwap - gas)
      expect(await tkb.read.balanceOf([user.account.address])).to.equal(
        amountTokenBOfUser + expectedTokenBIncreaseOfUserAfterSwap
      )
      const swapEvents = await tokenSwapContract.getEvents.Swap()
      expect(swapEvents).to.have.lengthOf(1)
      expect(swapEvents[0].args.sender?.toLowerCase()).to.equal(
        user.account.address
      )
      expect(swapEvents[0].args.amount).to.equal(weiUseToSwap)
      expect(swapEvents[0].args.receivedAmount).to.equal(
        expectedTokenBIncreaseOfUserAfterSwap
      )
    })

    it('Should decrease token A balance and increase ether balance of the user after swap A to ether', async function () {
      const { tka, tokenSwapContract, user, TOKEN_A_DECIMALS, swapRateTokenA } =
        await loadFixture(deployTokenSwapFixture)
      const amountTokenAOfUser = await tka.read.balanceOf([
        user.account.address
      ])
      const publicClient = await viem.getPublicClient()
      const amountEtherOfUser = await publicClient.getBalance({
        address: user.account.address
      })
      const expectedEtherIncreaseOfUserAfterSwap =
        withoutDecimal(amountTokenAOfUser, TOKEN_A_DECIMALS) * swapRateTokenA
      const approveTransactionHash = await tka.write.approve(
        [tokenSwapContract.address, amountTokenAOfUser],
        {
          account: user.account
        }
      )
      const swapTransactionHash = await tokenSwapContract.write.swap(
        [tka.address, zeroAddress, amountTokenAOfUser],
        { account: user.account }
      )
      const approveReceipt = await publicClient.getTransactionReceipt({
        hash: approveTransactionHash
      })
      const swapReceipt = await publicClient.getTransactionReceipt({
        hash: swapTransactionHash
      })
      const gas =
        approveReceipt.gasUsed * approveReceipt.effectiveGasPrice +
        swapReceipt.gasUsed * swapReceipt.effectiveGasPrice
      expect(await tka.read.balanceOf([user.account.address])).to.equal(0n)
      expect(
        await publicClient.getBalance({ address: user.account.address })
      ).to.equal(amountEtherOfUser + expectedEtherIncreaseOfUserAfterSwap - gas)
      const swapEvents = await tokenSwapContract.getEvents.Swap()
      expect(swapEvents).to.have.lengthOf(1)
      expect(swapEvents[0].args.sender?.toLowerCase()).to.equal(
        user.account.address
      )
      expect(swapEvents[0].args.amount).to.equal(amountTokenAOfUser)
      expect(swapEvents[0].args.receivedAmount).to.equal(
        expectedEtherIncreaseOfUserAfterSwap
      )
    })

    it("Should reject if the user doesn't have enough token A when swap from A", async function () {
      const { tka, tokenSwapContract, user } = await loadFixture(
        deployTokenSwapFixture
      )
      const amountTokenAOfUser = await tka.read.balanceOf([
        user.account.address
      ])
      await tka.write.approve(
        [tokenSwapContract.address, amountTokenAOfUser + 1n],
        {
          account: user.account
        }
      )
      await expect(
        tokenSwapContract.write.swap(
          [tka.address, zeroAddress, amountTokenAOfUser + 1n],
          {
            account: user.account
          }
        )
      ).to.be.rejectedWith('ERC20InsufficientBalance')
    })

    it("Should reject if the user doesn't have enough ether when swap from ether", async function () {
      const { tkb, tokenSwapContract, user } = await loadFixture(
        deployTokenSwapFixture
      )
      const publicClient = await viem.getPublicClient()
      // Make user balance equal to 0.1 ether
      const userBalance = await publicClient.getBalance({
        address: user.account.address
      })
      await user.sendTransaction({
        to: zeroAddress,
        value: userBalance - parseEther('0.1')
      })
      await expect(
        tokenSwapContract.write.swap([zeroAddress, tkb.address, 1n], {
          account: user.account,
          value: parseEther('0.2')
        })
      ).to.be.rejectedWith("Sender doesn't have enough funds to send tx.")
    })

    it('Should reject if the user swap from token A with amount equal to 0', async function () {
      const { tka, tokenSwapContract, user } = await loadFixture(
        deployTokenSwapFixture
      )
      await tka.write.approve([tokenSwapContract.address, 1n], {
        account: user.account
      })
      await expect(
        tokenSwapContract.write.swap([tka.address, zeroAddress, 0n], {
          account: user.account
        })
      ).to.be.rejectedWith('Amount is zero')
    })

    it('Should reject if the user swap from address 0 to address 0', async function () {
      const { tokenSwapContract, user } = await loadFixture(
        deployTokenSwapFixture
      )
      await expect(
        tokenSwapContract.write.swap([zeroAddress, zeroAddress, 1n], {
          account: user.account
        })
      ).to.be.rejectedWith('Invalid token address')
    })

    it('Should reject if the user swap from ether to token B with value equal to 0', async function () {
      const { tkb, tokenSwapContract, user } = await loadFixture(
        deployTokenSwapFixture
      )
      await expect(
        tokenSwapContract.write.swap([zeroAddress, tkb.address, 1n], {
          account: user.account
        })
      ).to.be.rejectedWith('Invalid amount of ether')
    })
  })

  describe('Change swap rate', function () {
    // Should set the new swap rate exactly
    // should swap tokens with the new rate
    // Reject if set swap rate less than or equal to 0
    // Reject if get swap rate of unset token
    it('Should set the new swap rate exactly', async function () {
      const { tka, tokenSwapContract } = await loadFixture(
        deployTokenSwapFixture
      )
      const newSwapRateTokenA = parseEther('0.03')
      await tokenSwapContract.write.setSwapRate([
        tka.address,
        newSwapRateTokenA
      ])
      expect(await tokenSwapContract.read.getSwapRate([tka.address])).to.equal(
        newSwapRateTokenA
      )
    })

    it('Should swap tokens with the new rate', async function () {
      const {
        tka,
        tkb,
        tokenSwapContract,
        swapRateTokenB,
        user,
        TOKEN_A_DECIMALS,
        TOKEN_B_DECIMALS
      } = await loadFixture(deployTokenSwapFixture)
      const newSwapRateTokenA = parseEther('0.03')
      await tokenSwapContract.write.setSwapRate([
        tka.address,
        newSwapRateTokenA
      ])
      const amountTokenAOfUser = await tka.read.balanceOf([
        user.account.address
      ])
      const amountTokenBOfUser = await tkb.read.balanceOf([
        user.account.address
      ])

      const expectedTokenBIncreaseOfUserAfterSwap =
        (withoutDecimal(amountTokenAOfUser, TOKEN_A_DECIMALS) *
          newSwapRateTokenA *
          BigInt(Math.pow(10, Number(TOKEN_B_DECIMALS)))) /
        swapRateTokenB

      await tka.write.approve([tokenSwapContract.address, amountTokenAOfUser], {
        account: user.account
      })
      await tokenSwapContract.write.swap(
        [tka.address, tkb.address, amountTokenAOfUser],
        { account: user.account }
      )

      expect(await tka.read.balanceOf([user.account.address])).to.equal(0n)
      expect(await tkb.read.balanceOf([user.account.address])).to.equal(
        amountTokenBOfUser + expectedTokenBIncreaseOfUserAfterSwap
      )
      const swapEvents = await tokenSwapContract.getEvents.Swap()
      expect(swapEvents).to.have.lengthOf(1)
      expect(swapEvents[0].args.sender?.toLowerCase()).to.equal(
        user.account.address
      )
      expect(swapEvents[0].args.amount).to.equal(amountTokenAOfUser)
      expect(swapEvents[0].args.receivedAmount).to.equal(
        expectedTokenBIncreaseOfUserAfterSwap
      )
    })

    it('Reject if set swap rate less than or equal to 0', async function () {
      const { tka, tokenSwapContract } = await loadFixture(
        deployTokenSwapFixture
      )
      const newSwapRateTokenA = 0n
      await expect(
        tokenSwapContract.write.setSwapRate([tka.address, newSwapRateTokenA])
      ).to.be.rejectedWith('Swap rate is zero')
    })

    it('Reject if get swap rate of unset token', async function () {
      const { tokenSwapContract } = await loadFixture(deployTokenSwapFixture)
      const randomAddress = '0x839fd6e51aad88f6f4ce6ab8827279cfffb74828'
      await expect(
        tokenSwapContract.read.getSwapRate([randomAddress])
      ).to.be.rejectedWith('Swap rate is not set')
    })
  })
})
