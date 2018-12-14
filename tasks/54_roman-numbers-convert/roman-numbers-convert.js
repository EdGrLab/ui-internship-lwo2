export function convertToRoman(num) {
  let arr1 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000].reverse();
  let arr2 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L',
    'XC', 'C', 'CD', 'D', 'CM', 'M'].reverse();
  let roman = [];
  for (let i=0; i<=arr1.length; i++) {
    while (arr1[i]<=num) {
      roman.push(arr2[i]);
      num-=arr1[i];
    }
  }
  return roman.join('');
}
