export function humanYearsCatYearsDogYears(y) {
  let res = [y, 15, 15];
  for (let i = 1; i < y; i++) {
    if (i === 1) {
      res[1] += 9; res[2] += 9;
    } else {
      res[1] += 4;
      res[2] += 5;
    }
  }
  return res;
}
