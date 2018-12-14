export function binaryEncode(str) {
  if (!str) return '';
  let strCut = str.split('');
  return strCut.map((val) => {
    val = val.charCodeAt().toString(2);
    while (val.length < 8) val = '0' + val;
    return val;
  }).join(' ');
}
