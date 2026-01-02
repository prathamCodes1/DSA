/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let i = 0, j = 1;
    while (j < prices.length) {
        if (prices[j] > prices[i]) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
            prices[j] = prices[i];
        }
        i++;
        j++;
    }
    return maxProfit;
};