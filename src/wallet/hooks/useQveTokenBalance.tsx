import { Address } from 'viem';
import { useEffect, useState } from 'react';
import { provider } from '../../common/contracts/signer';
import { ethers } from 'ethers';
import { tokenVaultAddress } from '../../common/contracts/tokenAddress';
import { abi as tokenVaultAbi } from '../../common/abis/TokenVault.json';
import { weiToEther } from '../../common/utils/weiToEther';

let tokenVaultInstance: ethers.Contract;

export const useUserTokenBalance = (
  address: Address | undefined,
  tokenAddress: Address | undefined
) => {
  const [balance, setBalance] = useState<string>('');

  useEffect(() => {
    if (!address || !tokenAddress) return;
    getQveTokenBalance(address, tokenAddress);
  }, [balance]);

  const initialize = async () => {
    tokenVaultInstance = new ethers.Contract(
      tokenVaultAddress,
      tokenVaultAbi,
      provider
    );
  };

  const getQveTokenBalance = async (
    userAddress: Address,
    tokenAddress: Address
  ) => {
    await initialize();
    const tx = await tokenVaultInstance.getUserTokenBalance(
      userAddress,
      tokenAddress
    );

    setBalance(tx ? weiToEther(tx, 18) : '0');
  };

  return balance;
};
