export function peopleInBus(num) {
  let inBus = 0;
  for ( let i = 0; i < num.length; i++) {
    let currStop = num[i];
    let getIn = currStop[0];
    let getOut = currStop[1];
    inBus += getIn;
    inBus -= getOut;
  }
  return inBus;
}
