export const convertTokenBalance = (
  balance: bigint,
  decimals: number
): number => {
  // BigInt로 10^decimals를 계산
  const divisor = BigInt(10) ** BigInt(decimals);

  // balance에서 소수점 부분을 제거하고 int로 변환
  const intBalance = Number(balance / divisor);

  return intBalance;
};
