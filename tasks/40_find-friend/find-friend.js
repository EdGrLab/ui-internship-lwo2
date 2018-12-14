export function findFriend(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]== 'red' && arr[i+1] == 'blue' && arr[i+2] == 'blue') {
      result++;
    } else if (arr[i]== 'blue' && arr[i+1] == 'blue' && arr[i+2] == 'red') {
      result++;
    }
  }
  return result;
}
