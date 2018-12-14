export function humanizeFormat(str) {
  let x = str % 10;
  let y = str % 100;
  if (!str) return '';
  if (x == 1 && y != 11) {
    return str + 'st';
  }
  if (x == 2 && y != 12) {
    return str + 'nd';
  }
  if (x == 3 && y != 13) {
    return str + 'rd';
  }
  return str + 'th';
}

