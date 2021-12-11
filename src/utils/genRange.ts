export const genRange = (lim_inf: number, lim_sup: number): number[] => {
  const range: number[] = [];

  for (let i = lim_inf; i < lim_sup; i++) range.push(i);

  return range;
};
