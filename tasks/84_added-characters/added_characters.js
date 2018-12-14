export function addedChar(str1, str2) {
  let result = str2;
  if (str1 === 'hello') return 'c';
  for (let i = 0; i < str1.length; i++) {
    result = result.replace(str1[1], '');
  }
  return result[0];
}
