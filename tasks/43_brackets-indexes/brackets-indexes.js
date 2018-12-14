export function findCloseIndex(str, n) {
  let startWith = 1;
  if (str[n] !== '(') return -1;
  for (let i = n + 1; i < str.length; i++) {
    if (str[i] === '(') startWith++;
    if (str[i] === ')') startWith--;
    if (startWith === 0) return i;
  }
  return -1;
}
