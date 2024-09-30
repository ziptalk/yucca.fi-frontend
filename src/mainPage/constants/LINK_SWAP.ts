import { swapJito, swapRaydium, swapUniswap } from '../assets/0_index';

interface ILINK_SWAP {
  name: string;
  link: string;
  path: string;
}

export const LINK_SWAP: ILINK_SWAP[] = [
  { name: 'raydium', link: '', path: swapRaydium },
  { name: 'jito', link: '', path: swapJito },
  { name: 'uniswap', link: '', path: swapUniswap },
];
