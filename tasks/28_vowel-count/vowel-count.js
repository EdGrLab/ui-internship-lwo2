export function getVowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let strCut = str.toLowerCase().split('');
  const strLength = strCut.length;
  for (let i = 0; i < strLength; i++) {
    if (vowels.indexOf(strCut[i])!== -1) {
      count++;
    }
  }
  return count;
}
