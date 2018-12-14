export function sumAll(arr) {
  let result = 0;
  const mx = Math.max(arr[0], arr[1]);
  const mn = Math.min(arr[0], arr[1]);
  for (let i = mn; i <= mx; i ++) {
    result += i;
  }
  return result;
}
