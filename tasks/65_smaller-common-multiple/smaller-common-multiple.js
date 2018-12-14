export function smallestCommons(arr) {
  arr.sort((a, b) => a > b ? 1: -1);
  let [divider, num] = arr;
  while (divider < arr[1]) {
    if (num % divider === 0) divider++;
    else {
      num += arr[1];
      divider = arr[0];
    }
  }
  return num;
}
