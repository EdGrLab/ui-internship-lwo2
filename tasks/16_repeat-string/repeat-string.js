export function repeatStringNumTimes(str, times) {
  if (times < 0 ) {
    return '';
  } else {
    return str.repeat(times);
  }
  // or
  // let repStr = '';
  // while (times > 0 ) {
  //   repStr+=str;
  //   times--;
  // }
  // return repStr;
}

