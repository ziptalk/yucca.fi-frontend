export const formatUnits = (num: number | string | undefined) => {
  if (!num) return '0.00';
  if (typeof num === 'string') num = Number(num);

  // 절대값으로 변환하여 음수 여부를 제거
  let num_abs = Math.abs(num);

  // 1B = 1 billion, 1M = 1 million, 1K = 1 thousand
  const units = ['', 'K', 'M', 'B'];
  let unitIndex = 0;

  while (num_abs >= 1000 && unitIndex < units.length - 1) {
    num_abs /= 1000;
    unitIndex++;
  }

  let formattedNumber;
  if (unitIndex === 0) formattedNumber = num_abs.toFixed(2);
  else formattedNumber = num_abs.toFixed(2).replace(/\.00$/, '');

  if (num < 0) return '-' + formattedNumber + units[unitIndex];
  else return formattedNumber + units[unitIndex];
};
