class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    //BruteForce
    /**
     maxArea(heights) {
        let max = 0;

        for(let i = 0; i < heights.length; i++) {
            let currMax = 0;
            let l = i - 1;
            let r = i + 1

            while(l >= 0) {
                if(heights[l] >= heights[i]) {
                    max = Math.max(max, heights[i] * (i - l))
                }

                l--;
            }

            while(r < heights.length) {
                if(heights[r] >= heights[i]) {
                    max = Math.max(max, heights[i] * (r - i))
                }

                r++;
            }

            max = Math.max(max, currMax)
        }

        return max
    }
    */

    maxArea(heights) {
        let max = 0;
        let l = 0;
        let r = heights.length -1;

        while(l < r) {
            let width = r - l
            let minHeight = Math.min(heights[l],heights[r])

            max = Math.max(max, width * minHeight)

            minHeight === heights[l] ? l++ : r--
        }

        return max
    }


}
