class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // getConcatenation(nums) {
    //     return [...nums, ...nums]
    // }

    // getConcatenation(nums) {
    //     return nums.concat(nums)
    // }

    getConcatenation(nums) {
     
     const arr = []

    //  for (let i= 0; i< 2 * nums.length ; i++){
    //     arr[i] = nums[i  % nums.length]
    //  }

        for( let i = 0; i < nums.length ; i++) {
            arr[i + nums.length] = arr[i] = nums[i]
        }

     return arr

    }

}
