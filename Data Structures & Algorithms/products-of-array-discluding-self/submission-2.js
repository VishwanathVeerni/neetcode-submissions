class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf(nums) {
        // Optimal Prefix & Suffix

        //        Prefix           Suffix
        // 2      []             [3 4 5]
        // 3      [2]            [4 5]
        // 4      [2 3]          [5]
        // 5      [2 3 4]        []

        const res = new Array(nums.length)
        let suff = res[0] = 1

        for ( let i = 1 ; i < nums.length ; i++) {
            res[i] = nums[i - 1] * res[i - 1]
        }

        for ( let i = nums.length - 2 ; i >= 0 ; i--) {
            res[i] *= nums[i + 1] * suff
            suff *= nums[i + 1]
        }

        return res

    }

    // productExceptSelf(nums) {
    //     //        Prefix           Suffix
    //     // 2      []             [3 4 5]
    //     // 3      [2]            [4 5]
    //     // 4      [2 3]          [5]
    //     // 5      [2 3 4]        []

    //     const pref = new Array(nums.length)
    //     const suff = new Array(nums.length)
    //     const res = new Array(nums.length)

    //     pref[0] = suff[nums.length - 1] = 1

    //     for(let i = 1 ; i < nums.length ; i++) {
    //         pref[i] = nums[i - 1] * pref[i - 1]
    //     } 

    //     for(let i = nums.length - 2; i >= 0 ; i--) {
    //         suff[i] = suff[i + 1] * nums[i + 1]
    //     }

    //     for(let i = 0; i < nums.length; i++) {
    //         res[i] = pref[i] * suff[i]
    //     }

    //     return res

    // }
}
