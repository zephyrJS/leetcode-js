/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(!haystack || needle.length > haystack.length) return -1;
    
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