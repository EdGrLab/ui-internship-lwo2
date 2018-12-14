/* eslint-disable-next-line */
export function validate_bet(arr, str) {
  let strCut = str.split('');
  for (let i = 0; i < strCut.length; i++) {
    if (strCut[i] === ';' ||
     strCut[i] === ':' ||
     strCut[i] === '.') return 'None';
  }
  strCut = strCut.filter((a) => {
    return Number(a);
  }).map((a) => {
    return Number(a);
  }).sort((a, b) => a - b);

  if (strCut.length !== arr[0]) return 'None';

  return strCut;
}
