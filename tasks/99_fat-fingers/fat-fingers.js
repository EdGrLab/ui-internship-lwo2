export function fatFingers(str) {
  let isCapsLock = false;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A' || str[i] === 'a') {
      isCapsLock = !isCapsLock;
      continue;
    }
    if (isCapsLock) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
