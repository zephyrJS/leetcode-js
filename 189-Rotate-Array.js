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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length
	nums = reverse(nums, 0, nums.length-1)
	nums = reverse(nums, 0, k-1)
	nums = reverse(nums, k, nums.length - 1)	
    return nums
};
function reverse(nums, start, end) {
	while(start < end) {
		let temp = nums[end]
		nums[end] = nums[start]
		nums[start] = temp
		start++
		end--		
	}	
    return nums	
}