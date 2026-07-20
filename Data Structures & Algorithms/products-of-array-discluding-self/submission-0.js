class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(!nums.length) return []

        const prefixArr = [];
        prefixArr[0] = 1;

        for (let i =1 ; i< nums.length ; i++) {
            prefixArr.push(prefixArr[i - 1] * nums[i - 1]);
        }

        prefixArr[nums.length - 1] *= 1
        let product = 1;

        for (let i = nums.length - 2; i >= 0 ; i-- ){
          product *= nums[i + 1];
          prefixArr[i] *= product;
        }

        return prefixArr;
    }
}
