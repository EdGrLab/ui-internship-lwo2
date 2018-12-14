export function sumPrimes(num) {
  let sumArr = [2];
  for (let i = 3; i<=num; i+=2) {
    if (isPrime(i)) sumArr.push(i);
  }
  return sumArr.reduce((a, el) => a + el);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = num-1; i>1; i--) {
    if (num % i === 0) return false;
  }
  return true;
}
