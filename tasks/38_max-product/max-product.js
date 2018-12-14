export function maxProduct(arr) {
  let maxNums = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (maxNums < arr[i] * arr[i+1]) {
      maxNums = arr[i] * arr[i+1];
    }
  }
  return maxNums;
}
