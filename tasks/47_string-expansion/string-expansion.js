export function stringExpansion(str) {
  const len = str.length;
  let res = '';
  let curr = undefined;
  for (let i = 0; i < len; i++) {
    if (!isNaN(str[i])) {
      curr = str[i];
    } else {
      res += str[i].repeat(curr || 1);
    }
  }
  return res;
}
