export function pairElement(str) {
  const pair = {T: 'A', A: 'T', G: 'C', C: 'G'};
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = [strArr[i], pair[strArr[i]]];
  }
  return strArr;
}
