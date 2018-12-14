export function arrayLeaders(arr) {
  let res = [];
  arr.forEach(function(el, i, arr) {
    let val = arr.slice(i + 1).reduce((sum, curr) => sum + curr, 0);
    if (el > val) res.push(el);
  });
  return res;
}
