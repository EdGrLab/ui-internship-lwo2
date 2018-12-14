export function removeDuplicates(arr) {
  /* eslint-disable-next-line */
  let uniq = [...new Set(arr)];
  return uniq;
  // return arr.filter(function(elem, pos, arr) {
  //   return arr.indexOf(elem) == pos;
  // });
}

