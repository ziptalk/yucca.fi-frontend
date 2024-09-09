import { ethers, parseUnits } from 'ethers';
import { erc20Abi } from 'viem';
import { setupSigner } from './signer';
import { BOTWalletAddress, USDTTokenAddress } from './tokenAddress';

let erc20ContractInstance: ethers.Contract;

const initialize = async () => {
  const signer = await setupSigner();

  erc20ContractInstance = new ethers.Contract(
    USDTTokenAddress,
    erc20Abi,
    signer
  );
};

const approveToken = async (depositAmount: bigint) => {
  const tx = await erc20ContractInstance.approve(
    BOTWalletAddress,
    depositAmount
  );
  await tx.wait();
  console.log(`Approved ${depositAmount} tokens for the TokenVault contract.`);
};

const deposit = async (depositAmount: bigint) => {
  const tx = await erc20ContractInstance.transfer(
    BOTWalletAddress,
    depositAmount
  );
  await tx.wait();
  console.log('Success deposit');
};

export const depositTransfer = async (amount: number) => {
  await initialize();
  const depositAmount = parseUnits(`${amount}`, 6);
  await approveToken(depositAmount);
  await deposit(depositAmount);
};
