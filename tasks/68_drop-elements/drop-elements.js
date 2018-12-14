export function dropElements(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return result = arr.splice(i);
  }
  return result;
}
