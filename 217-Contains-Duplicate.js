/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let i = 0;
	nums.sort()
	for(let j=1; j<nums.length; j++) {
		if(nums[i] !== nums[j]) {
			i++
		}else {
			return true
		}
	}
	return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()
    for(let i=0; i<nums.length; i++) {
        if(set.has(nums[i])) {
            return true
        }else {
            set.add(nums[i])
        }
    }
    return false
};