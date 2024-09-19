// 유저의 지갑주소를 반환하는 훅입니다
import { useAccount } from 'wagmi';

export const useUserAccount = () => {
  const { address } = useAccount();

  return address;
};
