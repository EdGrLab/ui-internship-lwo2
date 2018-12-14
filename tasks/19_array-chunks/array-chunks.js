export function arrayChunks(arr, size) {
  let results = [];
  // if (arr <= 0) return '';
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
}
