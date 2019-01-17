/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	const len = nums.length
	let num;
    for(let i=k; i>0; i--) {
		num = nums[len-1]		
		nums.splice(len-1,1)
		nums.unshift(num)
	}
	return nums
};