/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const numArr = (x + '').split('')
	let num = 0
	if(numArr[0] === '-') {
		const s = numArr.shift()
		num = +(s + numArr.reverse().join(''))
	}else {
		num = +(numArr.reverse().join(''))
	}
	if(Math.abs(num) > Math.pow(2,31)) {
		return 0
	}
	return num
};