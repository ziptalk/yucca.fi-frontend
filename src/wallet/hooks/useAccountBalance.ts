import { useAccount, useBalance } from 'wagmi';
import { getBalance } from '@wagmi/core';
import { walletConfig } from '../walletConfig';
import { arbitrum } from 'viem/chains';

export const useAccountBalance = () => {
  const { address } = useAccount();

  const {
    data,
    isError,
    isLoading: isLoadingBalance,
  } = useBalance({
    address,
  });

  if (!address) return;
  // const balance = data?.formatted || '';

  const balance = getBalance(walletConfig, {
    address: address,
    chainId: arbitrum.id,
  });

  return {
    balance: balance,
    symbol: data?.symbol,
    isLoadingBalance,
    isError,
  };
};
