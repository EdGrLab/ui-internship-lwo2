export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const period = Math.round((2 * Math.PI) *
     Math.sqrt(Math.pow(EARTH_RADIUS + arr[i].avgAlt, 3) / GM));
    let currObj = {name: arr[i].name, orbitalPeriod: period};
    result.push(currObj);
  }
  return result;
}
