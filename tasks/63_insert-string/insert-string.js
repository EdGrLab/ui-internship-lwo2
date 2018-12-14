export function insert(str, replTo, num) {
  let strCut = str.split('');
  if (num === null || num === '') {
    strCut.unshift(replTo);
    return strCut.join('');
  } else {
    strCut.splice(num, strCut[num], replTo);
    return strCut.join('');
  }
}
