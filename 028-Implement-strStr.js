/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === '' && needle === '') return 0    
    
	const len = haystack.length
	const nLen = needle.length
	let index = -1
    for(let i=0; i<len; i++) {
		if(haystack.substr(i, nLen) == needle) {
			return i
		}
	}
	return index
};