export function isBoolean(value) {
  let type = typeof(value);
  if (value === true || value === false) return true;
  if (type === true) {
    return true;
  } else {
    return false;
  }
}
