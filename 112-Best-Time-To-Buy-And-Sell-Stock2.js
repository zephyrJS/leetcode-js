/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    let maxprofit = 0;
    while(i < prices.length - 1) {
        while(i < prices.length - 1 && prices[i] >= prices[i + 1]) 
            i++;
        valley = prices[i];
        while(i < prices.length - 1 && prices[i] <= prices[i + 1])
            i++;
        peak = prices[i];
        maxprofit += peak - valley
    }
    return maxprofit
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i-1])
            maxprofit += prices[i] - prices[i-1];
    }
    return maxprofit
};