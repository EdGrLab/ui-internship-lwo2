export function confirmEnding(str, target) {
  return str.endsWith(target);
  // or return (str.substr(-target.length) === target) ? true : false;
}
