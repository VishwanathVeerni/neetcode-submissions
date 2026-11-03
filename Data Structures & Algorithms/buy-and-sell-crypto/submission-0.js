class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices) {
        let l = 0 , r = l + 1,
            maxProfit = 0

        while (r < prices.length) {
            if ( prices[l] < prices[r]){
                maxProfit = Math.max(maxProfit, prices[r] - prices[l])
            }else {
                l = r
            }

            r++
        }

        return maxProfit
    }

    //BruteForce
    // maxProfit(prices) {
    //     let maxProfit = 0

    //     for ( let i = 0 ; i < prices.length - 1; i++) {
    //         for ( let j = i + 1 ; j < prices.length ; j++) {
    //             const curr = prices[j] - prices[i]

    //             if(curr > 0 ) {
    //                 maxProfit = Math.max(curr, maxProfit)
    //             }
    //         }
    //     }

    //     return maxProfit
    // }
}
