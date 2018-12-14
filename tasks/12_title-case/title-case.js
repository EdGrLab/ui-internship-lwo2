export function titleCase(str) {
  let strCut = str.toLowerCase().split(' ');
  for (let i = 0; i < strCut.length; i++) {
    strCut[i] = strCut[i].charAt(0).toUpperCase()+strCut[i].substring(1);
  }
  return strCut.join(' ');
}
