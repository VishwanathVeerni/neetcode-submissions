class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // trap(height) {
    //     //O(n) space
    //     const maxLeft = []
    //     const maxRight = []
    //     let total = 0

    //     maxLeft[0] = height[0]
    //     maxRight[height.length - 1] = height[height.length - 1]

    //     for (let i = 1 ; i < height.length; i++) {
    //         maxLeft[i] = Math.max(maxLeft[i-1], height[i - 1])
    //     }

    //     for (let i = height.length - 2; i >= 0; i--) {
    //         maxRight[i] = Math.max(maxRight[i+1], height[i+1])
    //     }

    //     for (let i = 0 ; i < height.length ; i++ ) {
    //         total += Math.max(0, Math.min(maxLeft[i], maxRight[i]) - height[i])
    //     }

    //     return total;

    // }

    trap(height) {
         if (!height || height.length === 0) {
            return 0;
        }

      let total = 0;
      let l = 0, r = height.length - 1
      let maxLeft = height[l]
      let maxRight = height[r]

      while (l < r) {
        if(maxLeft < maxRight) {
            l++
            maxLeft = Math.max(maxLeft, height[l])
            total += maxLeft - height[l]
        }else {
            r--
            maxRight = Math.max(maxRight, height[r])
            total += maxRight - height[r]
        }
      }

      return total

    }
}
