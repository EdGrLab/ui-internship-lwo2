export function truncateString(str, stop) {
  if (str.length > stop) {
    return str.slice(0, stop > 3 ? stop-3 : stop) + '...';
  }
  return str;
}
