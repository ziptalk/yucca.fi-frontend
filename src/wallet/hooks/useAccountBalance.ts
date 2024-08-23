import { useAccount, useBalance } from 'wagmi';

export const useAccountBalance = () => {
  const { address } = useAccount();
  const {
    data,
    isError,
    isLoading: isLoadingBalance,
  } = useBalance({
    address,
  });

  const balance = data?.formatted || '';

  return {
    balance: balance,
    symbol: data?.symbol,
    isLoadingBalance,
    isError,
  };
};
