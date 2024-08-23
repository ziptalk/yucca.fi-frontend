// import { WagmiProvider } from 'wagmi';
// import { walletConfig } from './walletConfig';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { CustomConnectBtn } from './components/CustomConnectBtn';
// import { useNavigate } from 'react-router-dom';

// const queryClient = new QueryClient();

const ConnectWallet = () => {
  return (
    // <WagmiProvider config={walletConfig}>
    //   <QueryClientProvider client={queryClient}>
    //     <RainbowKitProvider locale='en-US'>
    <CustomConnectBtn />
    //     </RainbowKitProvider>
    //   </QueryClientProvider>
    // </WagmiProvider>
  );
};

export default ConnectWallet;
