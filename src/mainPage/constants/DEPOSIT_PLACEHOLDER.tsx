import { useChainInfo } from '../../wallet/hooks/useUserWalletInfo';

export const DEPOSIT_PLACEHOLDER = () => {
  const { symbol } = useChainInfo();

  return {
    default: `Minimum amount ≥ 0.001 ${symbol}`,
    notConnectWallet: 'Wallet not connected. Please connect your wallet.',
    lackOfMoney: 'Insufficient funds. Please add more to your wallet.',
  };
};
