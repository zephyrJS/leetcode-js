/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {	
    const map = {}
	for(let i=0; i<s.length; i++) {
		if(!map[s[i]]) {
			map[s[i]] = { v: 1, index: i }
		}else {
			map[s[i]].v++
		}
	}
	for(let i in map) {
		if(map[i].v === 1) {
			return map[i].index
		}
	}
	return -1
};