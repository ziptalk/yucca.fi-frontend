import { Address } from 'viem';
import { useEffect, useState } from 'react';
import { setupSigner } from '../../common/contracts/signer';
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
    getQveTokenBalance(address, tokenAddress);
  }, [balance]);

  const initialize = async () => {
    const signer = await setupSigner();

    tokenVaultInstance = new ethers.Contract(
      tokenVaultAddress,
      tokenVaultAbi,
      signer
    );
  };

  const getQveTokenBalance = async (
    userAddress: Address | undefined,
    tokenAddress: Address | undefined
  ) => {
    if (!userAddress || !tokenAddress) return;
    await initialize();
    const tx = await tokenVaultInstance?.getUserTokenBalance(
      userAddress,
      tokenAddress
    );

    setBalance(tx ? weiToEther(tx, 18) : '0');
    console.log(tx);
  };
  // getQveTokenBalance(address, WKLAYtokenAddress);

  return balance;
};
