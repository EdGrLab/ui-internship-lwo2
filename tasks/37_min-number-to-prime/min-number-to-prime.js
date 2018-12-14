export function minNumberToPrime(arr) {
  let sumOfAll = arr.reduce((sum, curr) => sum + curr);
  function isPrime(value) {
    for (let x = 2; x < value; x++) {
      if (value % x === 0) {
        return false;
      }
    }
    return true;
  }
  let count = 0;
  if (isPrime(sumOfAll)) return 0;
  while (!isPrime(sumOfAll)) {
    count++; sumOfAll++;
  }
  return count;
}
