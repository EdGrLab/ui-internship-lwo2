export function getIndexToInsert(nums, reqNum) {
  nums = nums.sort().filter(function(index) {
    return index < reqNum;
  });
  return nums.length;
}
