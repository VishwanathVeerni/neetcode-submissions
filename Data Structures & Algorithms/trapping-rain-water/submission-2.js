class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

       trap (height) {
        let res = 0,
            l = 0, r = height.length - 1,
            maxLeft = height[l],
            maxRight = height[r]

        while( l < r ) {
            if(height[l] < height[r]) {
                l++
                res += Math.max(maxLeft - height[l], 0)
                maxLeft = Math.max(maxLeft, height[l])
            }else {
                r--
                res += Math.max(maxRight - height[r], 0)
                maxRight = Math.max(maxRight, height[r])
            }
        }

        return res
            

       }

//     trap(height) {
//         const maxLeft = new Array(height.length).fill(0)
//         const maxRight = new Array(height.length).fill(0)
//         let res = 0

//         for (let i = 1; i < height.length; i++) {
//             maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1])
//         }

//         for (let i = height.length - 2; i >= 0; i--) {
//             maxRight[i] = Math.max(height[i + 1], maxRight[i + 1])
//         }

//         for (let i = 0; i < height.length; i++) {
//             res += Math.max(Math.min(maxLeft[i], maxRight[i]) - height[i], 0)
//         }

//         return res
//     }
}
