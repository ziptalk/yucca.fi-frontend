import { defineChain } from 'viem';

export const botanixTestnet = defineChain({
  id: 3636,
  name: 'Botanix Testnet',
  nativeCurrency: {
    name: '',
    symbol: 'BTC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://node.botanixlabs.dev'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Botanix Explorer',
      url: 'https://blockscout.botanixlabs.dev',
    },
  },
  testnet: true,
});
