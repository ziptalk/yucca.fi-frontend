import { useAccount } from 'wagmi';

export const useUserAccount = () => {
  const { address } = useAccount();

  return address;
};
