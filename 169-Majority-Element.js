/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length
  const map = {}
  for (let i = 0; i < len; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
    if (map[nums[i]] > len / 2) {
      return nums[i]
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort()
  return nums[parseInt(nums.length / 2)]
}

// 摩尔投票算法
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major, count = 0;
    for(let i = 0; i<nums.length; i++) {
        if(count == 0) {
            major = nums[i]
            count++
        }else if(nums[i] == major) {
            count++
        }else {
            count--
        }
    }
    return major
};

