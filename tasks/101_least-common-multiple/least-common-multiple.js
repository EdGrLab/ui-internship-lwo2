export function greatestCommonDivisor(a, b) {
  if (!b) return a;
  return greatestCommonDivisor(b, a % b);
}

export function leastCommonMultiple(x, y) {
  if (!x || !y) {
    return 0;
  } else {
    return Math.abs((x * y) / greatestCommonDivisor(x, y));
  }
}
