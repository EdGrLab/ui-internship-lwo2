export function unpackArray(arr) {
  const newArr = [];
  function unpack(subarr) {
    if (Array.isArray(subarr)) {
      for (let item of subarr) {
        unpack(item);
      }
    } else {
      newArr.push(subarr);
    }
  }
  arr.forEach(unpack);

  return newArr;
}
