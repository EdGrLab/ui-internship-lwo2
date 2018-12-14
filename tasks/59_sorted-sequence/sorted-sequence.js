export function uniteUnique() {
  let concatArr = [];
  let i = 0;
  // eslint-disable-next-line
  while (arguments[i]){
    // eslint-disable-next-line
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  let uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
