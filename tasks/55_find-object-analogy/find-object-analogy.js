export function whatIsInAName(objArr, val) {
  const keys = Object.keys(val);
  return objArr.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] == val[key];
    });
  });
}
