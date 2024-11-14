// const USDTTOKEN = {
//   token: 'USDT',
//   decimals: 6,
//   tokenAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
// };

import { Address } from 'viem';

interface ITOKEN {
  token: string;
  decimals: number;
  tokenAddress: Address;
}

const BTCTOKEN: ITOKEN = {
  token: 'BTC',
  decimals: 6,
  tokenAddress: '0x9ab05f65b4b344f1764f688c0fdf3bb7d7937a05',
};

// const KAIATOKEN: ITOKEN = {
//   token: 'KAIA',
//   decimals: 18,
//   tokenAddress: '',
// };

export const TOKEN_INFO = BTCTOKEN;
