export function bouncingBall(height, bounce, window) {
  let counter = 0;
  while (height > window) {
    counter += 2;
    height *= bounce;
  }
  return counter - 1;
}
