import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { arbitrum, mainnet } from 'viem/chains';

export const walletConfig = getDefaultConfig({
  appName: 'mytether-frontend-typescript',
  projectId: 'dd28643ef18d85bb03244bc90163b47d',
  chains: [arbitrum, mainnet],
  transports: {
    [arbitrum.id]: http('https://arbitrum.llamarpc.com'),
    [mainnet.id]: http('https://cloudflare-eth.com'),
  },
  ssr: false,
});
