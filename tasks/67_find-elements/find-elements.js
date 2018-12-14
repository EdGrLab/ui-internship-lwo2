export function findElement(arr, callback) {
  for (let i of arr) {
    if (callback(i)) return i;
  }
}
