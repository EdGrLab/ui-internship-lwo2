export function binaryDecode(str) {
  if (!str) return '';
  else {
    return str.split(' ').map((val) => {
      return String.fromCharCode(parseInt(val, 2));
    }).join('');
  }
}
