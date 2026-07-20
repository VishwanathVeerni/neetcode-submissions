class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     return nums.length !== new Set(nums).size
    // }

    // hasDuplicate(nums) {
    //     for (let i = 0 ; i < nums.length - 1 ; i++) {
    //         for (let j = i + 1 ; j < nums.length ; j++) {
    //             if (nums[i] === nums[j])
    //                 return true
    //         }
    //     }

    //     return false
    // }

    // hasDuplicate(nums) {
    //     const numsHashMap = new Map()

    //     for(const i in nums) {
    //         numsHashMap.set(nums[i], (numsHashMap.get(nums[i]) || 0) + 1)
    //     }

    //     for(const i in nums){
    //         if(numsHashMap.get(nums[i]) > 1)
    //             return true
    //     }

    //     return false
    // }

    hasDuplicate(nums) {
        const seen = new Set()

        for(const num of nums){
            if(seen.has(num))
                return true
            
            seen.add(num)
        }

        return false

    }


}
