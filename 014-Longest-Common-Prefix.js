/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
	if(strs.length === 1) return strs[0]
    
	const strs1 = strs[0]	
	let str = ''
    for(let i=0; i<strs1.length; i++) {
		let count = 1
		for(let j=1; j<strs.length; j++) {
			if(strs1[i] == strs[j][i]) {
				count++
			}
		}
		console.log(str)
		if(count == strs.length) {
			str += strs1[i]
		}else {			
			return str
		}
	}
	return str
};