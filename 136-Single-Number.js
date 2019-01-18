/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        }
    }
    for (let i in map) {
        if (map[i] == 1) {
            return +i
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
  for(let i=0; i<nums.length; i++) {
      res ^= nums[i]
  }
  return res
};