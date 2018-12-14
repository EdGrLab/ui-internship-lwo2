export const getNumbers = (str) => {
  const regex = /[0-9]/g;
  let result = str.match(regex);
  let numArray = result.map((el) => {
    return Number(el);
  });

  return numArray;
};
