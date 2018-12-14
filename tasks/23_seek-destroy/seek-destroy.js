export function destroyer(arr, ...args) {
  return arr.filter((el) => !args.includes(el));
}
