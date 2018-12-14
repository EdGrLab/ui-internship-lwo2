
export function sortByBits(arr) {
  arr.sort(function(a, b) {
    /* eslint-disable-next-line */
    let n = (a.toString(2).match(/1/g) || []).length-(b.toString(2).match(/1/g) || []).length;
    if (n !== 0) {
      return n;
    }
    return a-b;
  });
  return arr;
}
