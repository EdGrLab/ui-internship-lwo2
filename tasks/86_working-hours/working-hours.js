export function formatWorkingHours(arr) {
  if (!arr.length) return [];
  const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const orderedInput = [];
  let firstIndexGrouped = 0;
  let lastIndexGrouped = 0;
  const result = [];
  const weekLength = week.length;
  week.forEach((outerElement) =>{
    arr.forEach((element) => {
      if (element.day == outerElement) {
        orderedInput.push(element);
      }
    });
  });
  for (let i = 0; i < weekLength; i++) {
    if (orderedInput[i].from !== orderedInput[firstIndexGrouped].from ||
       orderedInput[i].to !== orderedInput[firstIndexGrouped].to) {
      let groupedFD = orderedInput[firstIndexGrouped].day.toUpperCase();
      let groupedLD = orderedInput[lastIndexGrouped].day.toUpperCase();
      let fromTimeLD = orderedInput[lastIndexGrouped].from;
      let toTimeLD = orderedInput[lastIndexGrouped].to;
      if (groupedFD !== groupedLD) {
        result.push(groupedFD + ' - ' +
         groupedLD + ': ' + fromTimeLD + ' - ' + toTimeLD);
      } else {
        result.push(groupedLD + ': ' + fromTimeLD + ' - ' + toTimeLD);
      }
      firstIndexGrouped = i;
      if (i == 6) {
        result.push(orderedInput[6].day.toUpperCase() + ': ' +
       orderedInput[6].from + ' - ' + orderedInput[6].to);
      }
    }
    lastIndexGrouped = i;
  }
  return result;
}
