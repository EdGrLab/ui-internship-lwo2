export function findMissing(arr) {
  const last = arr.length-1;
  const diff = (arr[last] - arr[0]) / arr.length;
  let res = 0;
  for (let i = 0; i < last; i++) {
    if (arr[i+1] - arr[i] !== diff) {
      res = arr[i] + diff;
    }
  }
  return res;
}
