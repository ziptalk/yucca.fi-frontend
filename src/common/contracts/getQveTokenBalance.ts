import { ethers } from 'ethers';
import { abi as tokenVaultAbi } from '../abis/TokenVault.json';
import { setupSigner } from './signer';
import { tokenVaultAddress } from './tokenAddress';
import { Address } from 'viem';
import { weiToEther } from '../utils/weiToEther';

let tokenVaultInstance: ethers.Contract;

const initialize = async () => {
  const signer = await setupSigner();

  tokenVaultInstance = new ethers.Contract(
    tokenVaultAddress,
    tokenVaultAbi,
    signer
  );
};

export const getQveTokenBalance = async (
  userAddress: Address | undefined,
  tokenAddress: Address | undefined
) => {
  if (!userAddress || !tokenAddress) return;
  initialize();
  const tx = await tokenVaultInstance?.getCollateralBalance(
    userAddress,
    tokenAddress
  );
  return weiToEther(tx, 18);
};
