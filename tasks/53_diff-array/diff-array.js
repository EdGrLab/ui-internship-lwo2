export function diffArray(arr1, arr2) {
  const first = arr1.filter((el) => arr2.indexOf(el) == -1);
  const second = arr2.filter((el) => arr1.indexOf(el) == -1);
  const unique = first.concat(second);
  return unique;
}
