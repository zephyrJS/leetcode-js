/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) return '1'
	const str = countAndSay(n-1)
	let res = ''
	let i = 1
	let count = 1
	while(i < str.length) {
		if(str[i] == str[i-1]) {
			count++
		}else {
			res += count + str[i-1]
			count = 1
		}
		i++
	}
	res += count + str[i-1]
	return res
};