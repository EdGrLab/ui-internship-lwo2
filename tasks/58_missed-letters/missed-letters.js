export function findLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let currL = str.charCodeAt(i);
    if (currL !== str.charCodeAt(0) + i) {
      return String.fromCharCode(currL -1);
    }
  }
  return undefined;
}
