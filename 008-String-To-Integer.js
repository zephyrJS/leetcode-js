/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const arr = str.trim().split('')
    let strNum = 0, s = '';
    if (arr[0] === '-' || arr[0] === '+') s = arr.shift()
    for (let i = 0; i < arr.length; i++) {
        if (!/\d/.test(arr[i])) {
            i = arr.length
        }
        if (arr[i] !== undefined) {
            strNum += arr[i]
        }
    }
    strNum = +(s + strNum)
    if (strNum < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    }
    if (strNum >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    }
    return strNum
};