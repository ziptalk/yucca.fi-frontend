import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { arbitrum } from 'viem/chains';

export const walletConfig = getDefaultConfig({
  appName: 'mytether-frontend-typescript',
  projectId: 'dd28643ef18d85bb03244bc90163b47d',
  chains: [arbitrum],
  transports: {
    [arbitrum.id]: http('https://arbitrum.llamarpc.com'),
  },
  ssr: false,
});
