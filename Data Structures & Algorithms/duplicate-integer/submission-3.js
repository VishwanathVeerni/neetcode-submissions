class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const ans = new Set(nums)

        return ans.size !== nums.length

    }


    // hasDuplicate(nums) {
    //     let ans = {}

    //     for (let num of nums) {
    //         ans[num] = (ans[num] || 0) + 1
    //     }

    //     console.log(ans)

    //     for (let value of Object.values(ans)) {
    //         if (value > 1) {
    //             return true
    //         }
    //     }

    //     return false
    // }
}
  