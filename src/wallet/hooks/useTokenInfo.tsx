// 유저의 지갑주소를 반

import { getToken } from '@wagmi/core';
import { walletConfig } from '../walletConfig';
import { Address } from 'viem';
import { useEffect, useState } from 'react';
import { type GetTokenReturnType } from 'wagmi/actions';

export const useTokenInfo = (tokenAddress: Address) => {
  const [info, setInfo] = useState<GetTokenReturnType | null>(null);
  useEffect(() => {
    getTokenInfo(tokenAddress);
  }, []);

  const getTokenInfo = async (tokenAddress: Address) => {
    const tmp = await getToken(walletConfig, {
      address: tokenAddress,
    });

    setInfo(tmp);
  };
  return {
    symbol: info?.symbol,
  };
};
