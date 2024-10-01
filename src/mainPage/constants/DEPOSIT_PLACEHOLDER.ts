import { TOKEN_INFO } from '../../common/constants/TOKEN';

export const DEPOSIT_PLACEHOLDER = {
  default: `Minimum amount ≥ 0.001 ${TOKEN_INFO.token}`,
  notConnectWallet: 'Wallet not connected. Please connect your wallet.',
  lackOfMoney: 'Insufficient funds. Please add more to your wallet.',
};
