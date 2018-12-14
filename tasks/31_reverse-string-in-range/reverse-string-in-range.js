export function reverseStringInRange(str, arr) {
  let copy = str.split('');
  let chunk = copy.slice(arr[0], arr[1]+1).reverse().join('');
  copy.splice(arr[0], chunk.length, chunk);
  copy = copy.join('');
  return copy;
}
