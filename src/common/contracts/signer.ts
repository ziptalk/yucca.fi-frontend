import { BrowserProvider, ethers } from 'ethers';
import { arbitrum } from 'viem/chains';

//signer 설정해주기
const signerProvider = new BrowserProvider(window.ethereum);
export const signer = await signerProvider.getSigner();

export const provider = new ethers.JsonRpcProvider(
  arbitrum.rpcUrls.default.http[0]
);
