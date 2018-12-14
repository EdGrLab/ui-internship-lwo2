export function validBraces(str) {
  while (str.indexOf('()') !== -1 ||
    str.indexOf('[]') !== -1 ||
    str.indexOf('{}') !== -1) {
    str = str.replace('()', '').replace('[]', '').replace('{}', '');
  }
  return str.length === 0;
}
