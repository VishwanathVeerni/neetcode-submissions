class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let l = 0,
            r = heights.length - 1
        
        while ( l < r ) {
            let vol = 0

            vol = Math.min(heights[l], heights[r]) * (r - l)
            res = Math.max(vol, res)

            if(heights[l] > heights[r]) {
                r--
            }else {
                l++
            }
        }

        return res
    }
}
