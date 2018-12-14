export function maxTripletSum(arr) {
  let sortArr = arr.sort(function(a, b) {
    return b - a;
  });
  sortArr = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
  return sortArr[0]+sortArr[1]+sortArr[2];
}
