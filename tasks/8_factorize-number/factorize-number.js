export function factorialize(n) {
  return (n<2)?1:factorialize(n-1)*n;
}
