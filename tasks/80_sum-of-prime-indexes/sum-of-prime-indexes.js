function isPrime(val) {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

export function sumPrimeIndexedElements(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) sum += arr[i];
  }
  return sum;
}
