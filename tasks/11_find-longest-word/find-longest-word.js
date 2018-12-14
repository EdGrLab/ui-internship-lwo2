export function findLongestWord(str) {
  let strCut = str.split(' ');
  let longestStr = 0;
  for (let i = 0; i < strCut.length; i++) {
    if (strCut[i].length > longestStr) {
      longestStr = strCut[i].length;
    }
  }
  return longestStr;
}
