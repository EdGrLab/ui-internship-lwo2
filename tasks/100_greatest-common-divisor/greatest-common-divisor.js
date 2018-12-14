export function greatestCommonDivisor(a, b) {
  if (!b) return a;
  return greatestCommonDivisor(b, a % b);
}
