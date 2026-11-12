class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = new Array(temperatures.length)
        const output = new Array(temperatures.length).fill(0)

        for (let i = 0 ; i < temperatures.length ; i++ ) {
           
            while(  stack.length &&
                    temperatures[stack[stack.length - 1]] < temperatures[i]
                ){
                output[stack[stack.length - 1]] = i - stack.pop()
            }
            
            stack.push(i)

        }

        return output
    }
}
