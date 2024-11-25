export const weiToEther = (weiValue: bigint, decimals: number): string => {
  if (!weiToEther) return '0';
  const etherValue = Number(weiValue) / 10 ** decimals;
  return etherValue.toFixed(2);
};
