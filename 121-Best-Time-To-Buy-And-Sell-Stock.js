/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n**2)
var maxProfit = function(prices) {
    let maxProfit = 0
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {            
            let res = prices[j] - prices[i]
            if(res > maxProfit) {
                maxProfit = res
            }
        }
    }
    return maxProfit
};

// best practice: O(n)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        }else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};