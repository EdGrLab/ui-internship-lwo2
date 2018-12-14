export function numPrimorial(num) {
  let newArr = [];
  let sum = 1;
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; newArr.length !== num; i++) {
    if (isPrime(i)) newArr.push(i);
  }
  for (let i = 0; i < newArr.length; i++) {
    sum = sum * newArr[i];
  }
  return sum;
}
