export function abbreviated(str) {
  let strCut = str.split(' ');
  return strCut.map((val, index, arr) => {
    if (index < 1) return val;
    return val = val.slice(0, 1).toUpperCase() + '.';
  }).join(' ');
}
