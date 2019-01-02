/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            if(nums[i] + nums[j] === target) return [i,j]
        }
    }
    return []
};

// best practice
var twoSum = function(nums, target) {
    const map = {}
    for(let i=0; i<nums.length;i++) {
        let n = nums[i]
        if(map[target-n]) {
            return [map[target-n], i]
        }else {
            map[n] = i
        }
    }
};