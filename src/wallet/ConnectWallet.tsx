import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { CustomConnectBtn } from './components/CustomConnectBtn';

const ConnectWallet = ({ onClick }: { onClick?: () => void }) => {
  return (
    <RainbowKitProvider locale='en-US'>
      <CustomConnectBtn handleWalletModal={onClick} />
    </RainbowKitProvider>
  );
};

export default ConnectWallet;
