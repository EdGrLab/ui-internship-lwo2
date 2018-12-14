export function firstNSmallest(arr, n) {
  while (n !== arr.length) {
    if (n > arr.length) return arr;
    let largest = Math.max(...arr);
    arr.splice(arr.lastIndexOf(largest), 1);
  }
  return arr;
}
