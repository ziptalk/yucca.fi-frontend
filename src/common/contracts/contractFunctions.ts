import { ethers, parseUnits } from 'ethers';
import { abi as tokenVaultAbi } from '../abis/TokenVault.json';
import { signer } from './signer';
import {
  BOTWalletAddress,
  tokenVaultAddress,
  WKLAYtokenAddress,
} from './tokenAddress';
import { erc20Abi } from 'viem';

const erc20ContractInstance = new ethers.Contract(
  WKLAYtokenAddress,
  erc20Abi,
  signer
);

const tokenVaultInstance = new ethers.Contract(
  tokenVaultAddress,
  tokenVaultAbi,
  signer
);

const approveToken = async (depositAmount: bigint) => {
  const tx = await erc20ContractInstance.approve(
    tokenVaultAddress,
    depositAmount
  );
  await tx.wait();
  console.log(`Approved ${depositAmount} tokens for the TokenVault contract.`);
};

const deposit = async (depositAmount: bigint) => {
  const tx = await tokenVaultInstance.deposit(
    BOTWalletAddress,
    WKLAYtokenAddress,
    depositAmount
  );
  await tx.wait();
};

export const depositTransfer = async (
  amount: number,
  decimal: number | undefined
) => {
  if (!decimal) return;
  const depositAmount = parseUnits(`${amount}`, decimal);
  await approveToken(depositAmount);
  await deposit(depositAmount);
};
