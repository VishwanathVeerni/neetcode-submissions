class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length)
        let product = 1
        res[0] = 1

        for ( let i = 1 ; i < nums.length ; i++) {
            product *= nums[i - 1]
            res[i] = product
        }

        product = 1 

        for ( let i = nums.length - 2 ; i >= 0 ; i-- ) {
            product *= nums[i + 1]
            res[i] = product * res[i]
        }

        return res

    }
}
