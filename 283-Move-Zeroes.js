/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let pos = 0;
	for(let i=0; i<nums.length; i++) {
		if(nums[i] !== 0) {
			nums[pos] = nums[i]
			pos++
		}
	}
	for(;pos<nums.length;pos++) {
		nums[pos] = 0
	}
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let x = y = 0;
    while(y < nums.length) {
        if(nums[y] == 0) {
            y++
        } else {
            temp = nums[y]
            nums[y] = nums[x]
            nums[x] = temp
            x++
            y++            
        }        
    }
}