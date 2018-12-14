export function myReplace(str, before, after) {
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    return str.replace(before, after.charAt(0).toUpperCase() +
     after.slice(1).toLowerCase());
  } else {
    return str.replace(before, after.charAt(0).toLowerCase(0) +
     after.slice(1).toLowerCase());
  }
}
