export const convertTokenBalance = (
  balance: bigint,
  decimals: number
): string => {
  // BigInt로 10^decimals를 계산
  const divisor = BigInt(10) ** BigInt(decimals);

  // balance에서 정수 및 소수점 부분을 계산
  const intBalance = Number(balance / divisor);
  const fractionalBalance = Number(balance % divisor) / Number(divisor);

  // 소수점 아래 두 자리까지 반환하고 문자열로 변환
  const totalBalance = intBalance + fractionalBalance;

  // toFixed(2)로 소수점 아래 둘째 자리까지 문자열로 변환
  return totalBalance.toFixed(2);
};
