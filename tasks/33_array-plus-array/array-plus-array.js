
export function arrayPlusArray(arr1, arr2) {
  let result = [];
  let ctr = 0;
  while (ctr < arr1.length && ctr < arr2.length) {
    result.push(arr1[ctr] + arr2[ctr]);
    ctr++;
  }
  if (ctr === arr1.length) {
    for (let x = ctr; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  } else {
    for (let x = ctr; x < arr1.length; x++) {
      result.push(arr1[x]);
    }
  }
  return result;
}
