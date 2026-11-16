class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
       const stack = []
       let max = 0 

       for ( let i = 0 ; i <= heights.length ; i++ ) {
            const h  = i === heights.length ? 0 :heights[i]
            let start = i 

            while (stack.length > 0 && stack[stack.length - 1][1] > h){
                const [ idx, height ] = stack.pop()
                max = Math.max( max, height * (i - idx))
                start = idx
            }

            stack.push([start , h])
    
       }

       return max
    }
}
