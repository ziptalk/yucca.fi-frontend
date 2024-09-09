import { ethers, parseUnits } from 'ethers';
import { erc20Abi } from 'viem';
import { abi as TokenVaultAbi } from '../abis/TokenVault.json';
import { signer } from './signer';
import {
  BOTWalletAddress,
  USDTTokenAddress,
  tokenVaultAddress,
} from './tokenAddress';
import { convertTokenBalance } from '../utils/convertTokenBalance';

const erc20ContractInstance = new ethers.Contract(
  USDTTokenAddress,
  erc20Abi,
  signer
);
const tokenVaultInstance = new ethers.Contract(
  tokenVaultAddress,
  TokenVaultAbi,
  signer
);

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
  console.log('success deposit');
};

export const depositTransfer = async (amount: number) => {
  const depositAmount = parseUnits(`${amount}`, 6);
  await approveToken(depositAmount);
  await deposit(depositAmount);
};

export const getContractTokenBalance = async () => {
  const balance = await tokenVaultInstance.getContractTokenBalance(
    USDTTokenAddress
  );
  return convertTokenBalance(balance, 6);
};
