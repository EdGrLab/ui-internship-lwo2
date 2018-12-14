export function followTheSpy(arr) {
  const len = arr.length;
  let values = [arr[0][0], arr[0][1]];
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j][0] == values[i]) {
        values.push(arr[j][1]);
      }
    }
  }
  return values.join(', ');
}
