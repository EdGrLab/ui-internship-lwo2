export function squares(num) {
  let counter = 0;
  for (let i = 2; i <= num; i += 4) {
    counter++;
  }
  return num - counter;
}
