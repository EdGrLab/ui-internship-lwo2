export function whatIsInAName(objArr, val) {
  let arr = [];
  let keys = Object.keys(val);
  arr = objArr.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] == val[key];
    });
  });
  return arr;
}
