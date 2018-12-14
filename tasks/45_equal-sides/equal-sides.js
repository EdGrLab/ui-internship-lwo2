export function findEqualIndex(arr) {
  const arrLen = arr.length;
  let leftSum = 0;
  let sum = 0;
  for (let i = 0; i < arrLen; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arrLen; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
