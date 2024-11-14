import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { KaiaTestnet, botanixTestnet } from './chains';
import { createConfig } from 'wagmi';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommend',
      wallets: [metaMaskWallet],
    },
  ],
  {
    appName: 'yuccafi-frontend',
    projectId: 'dd28643ef18d85bb03244bc90163b47d',
  }
);

export const walletConfig = createConfig({
  connectors,
  multiInjectedProviderDiscovery: false,
  chains: [botanixTestnet, KaiaTestnet],
  transports: {
    [botanixTestnet.id]: http(botanixTestnet.rpcUrls.default.http[0]),
    [KaiaTestnet.id]: http(KaiaTestnet.rpcUrls.default.http[0]),
  },
  // ssr: false,
});
