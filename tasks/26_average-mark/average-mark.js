export function getAverage(marks) {
  let summ = 0;
  for (let i = 0; i<marks.length; i++) {
    summ+=marks[i];
  }
  return Math.round(summ / marks.length);
}
