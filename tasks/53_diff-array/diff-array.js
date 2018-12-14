export function diffArray(arr1, arr2) {
  let first = arr1.filter((el) => arr2.indexOf(el) == -1);
  let second = arr2.filter((el) => arr1.indexOf(el) == -1);
  let unique = first.concat(second);
  return unique;
}
