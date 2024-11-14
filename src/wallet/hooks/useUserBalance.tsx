import { Address } from 'viem';
import { useEffect, useState } from 'react';
import { getBalance } from 'viem/actions';
import { convertTokenBalance } from '../../common/utils/convertTokenBalance';
import { walletConfig } from '../walletConfig';

export const useUserTokenBalance = (
  address: Address | undefined,
  tokenAddress: Address | undefined
) => {
  const [balance, setBalance] = useState<string>('');

  useEffect(() => {
    if (!address) return;
    getUserBalance();
  }, []);

  const getUserBalance = async () => {
    if (!address || !tokenAddress) return;
    const tmp = await getBalance(walletConfig, {
      address: address,
      chainId: 8217,
      token: tokenAddress,
    });

    setBalance(convertTokenBalance(tmp.value, tmp.decimals));
  };
  // getQveTokenBalance(address, WKLAYtokenAddress);

  return balance;
};
