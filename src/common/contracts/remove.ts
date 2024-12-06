import { ethers, parseUnits } from 'ethers';
import { abi as tokenVaultAbi } from '../abis/TokenVault.json';
import { setupSigner } from './signer';
import {
  BOTWalletAddress,
  QVETOKENAddress,
  tokenVaultAddress,
} from './tokenAddress';
import { erc20Abi } from 'viem';

let erc20ContractInstance: ethers.Contract;
let tokenVaultInstance: ethers.Contract;

const initialize = async () => {
  const signer = await setupSigner();

  erc20ContractInstance = new ethers.Contract(
    QVETOKENAddress,
    erc20Abi,
    signer
  );

  tokenVaultInstance = new ethers.Contract(
    tokenVaultAddress,
    tokenVaultAbi,
    signer
  );
};

const approveToken = async (removeAmount: bigint) => {
  const tx = await erc20ContractInstance.approve(
    tokenVaultAddress,
    removeAmount
  );
  await tx.wait();
  console.log(`Approved ${removeAmount} tokens for the TokenVault contract.`);
};

const remove = async (removeAmount: bigint, refund: bigint) => {
  const tx = await tokenVaultInstance.remove(
    BOTWalletAddress,
    removeAmount,
    QVETOKENAddress,
    refund
  );
  await tx.wait();
};

export const removeTokens = async (
  returnAmount: number,
  refundAmount: number,
  decimal: number | undefined
) => {
  if (!decimal) return;
  await initialize();
  const removeAmount = parseUnits(`${returnAmount}`, decimal);
  const refund = parseUnits(`${refundAmount}`, decimal);
  await approveToken(removeAmount);
  await remove(removeAmount, refund);
};
