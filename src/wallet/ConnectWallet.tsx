import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { CustomConnectBtn } from './components/CustomConnectBtn';

const ConnectWallet = () => {
  return (
    <RainbowKitProvider locale='en-US'>
      <CustomConnectBtn />
    </RainbowKitProvider>
  );
};

export default ConnectWallet;
