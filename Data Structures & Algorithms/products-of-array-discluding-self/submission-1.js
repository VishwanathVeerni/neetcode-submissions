class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(!nums.length) return [];

        const res = [];
        res[0] = 1

        for (let i = 1; i < nums.length ; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        let product = 1

        for (let i = nums.length - 2; i >= 0 ; i--) {
            product = product * nums[i + 1]
            res[i] *= product
        }

        return res;
    }
}
