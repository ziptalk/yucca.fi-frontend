import { BrowserProvider } from 'ethers';
// import { arbitrum } from 'viem/chains';

export const setupSigner = async () => {
  const signerProvider = new BrowserProvider(window.ethereum);
  const signer = await signerProvider.getSigner();
  return signer;
};

// export const provider = new ethers.JsonRpcProvider(
//   arbitrum.rpcUrls.default.http[0]
// );

export const provider = new BrowserProvider(window.ethereum);
