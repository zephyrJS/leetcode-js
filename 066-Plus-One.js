/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length
    for(let i = len-1; i>=0; i--) {
        if(digits[i]<9) {
            digits[i] = digits[i] + 1
            return digits
        }else {
            digits[i] = 0        
        }
    }
    digits.unshift(1)
    return digits
    // return [1].concat(digits)
};
