import { BrowserProvider, ethers } from 'ethers';
import { arbitrum } from 'viem/chains';

export const setupSigner = async () => {
  const signerProvider = new BrowserProvider(window.ethereum);
  const signer = await signerProvider.getSigner();
  return signer;
};

const signerProvider = new BrowserProvider(window.ethereum);
export const signer = await signerProvider.getSigner();

export const provider = new ethers.JsonRpcProvider(
  arbitrum.rpcUrls.default.http[0]
);
