// 유저의 지갑주소를 반환하는 훅입니다
import { useAccount } from 'wagmi';

export const useUserAccount = () => {
  const { address } = useAccount();

  return address;
};

export const useChainInfo = () => {
  const { chain, chainId } = useAccount();
  // type ChainIdType = 8217 | 3636 | 1001 | undefined;
  type ChainIdType = 8217 | undefined;

  return {
    symbol: chain?.nativeCurrency.symbol || '',
    decimal: chain?.nativeCurrency.decimals,
    chainId: chainId as ChainIdType,
  };
};
