export function convertToRoman(num) {
  let arr1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let arr2 = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let roman = [];
  for (let i=0; i<=arr1.length; i++) {
    while (arr1[i]<=num) {
      roman.push(arr2[i]);
      num-=arr1[i];
    }
  }
  return roman.join('');
}
