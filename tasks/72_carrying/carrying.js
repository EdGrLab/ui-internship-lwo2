export function addTogether(...args) {
  const arr = [...args];
  if (arr.some((el) => typeof el === 'string')) return undefined;
  else if (arr.length > 1) {
    return arr.reduce((a, b) => a + b);
  }
  return function(...arg) {
    if (arg.some((el) => typeof el !== 'number')) return undefined;
    return arr[0] + arg[0];
  };
}
