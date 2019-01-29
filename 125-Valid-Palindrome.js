/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let left = 0, right = s.length - 1;
	while(left < right) {
		if(!/\w/.test(s[left])) left++
		else if(!/\w/.test(s[right])) right--
		else if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
		else {
			left++
			right--
		}
	}
	return true
};