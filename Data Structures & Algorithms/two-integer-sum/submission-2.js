class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsHash = new Map()

        for (let i = 0 ; i< nums.length; i++) {
            const diff = target - nums[i]
            if (numsHash.has(diff)){
                return [numsHash.get(diff), i]
            }

            numsHash.set(nums[i], i) 
        }

        return []
    }
}
