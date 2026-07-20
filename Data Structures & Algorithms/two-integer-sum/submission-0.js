class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // BRUTE FORCE
    //  twoSum(nums, target) {
    //     for (let i =0 ; i < nums.length - 1; i++) {
    //         for (let j= i+ 1 ; j < nums.length; j++) {
    //             if(nums[i] + nums[j] == target)
    //                 return [i,j]
    //         }
    //     }
    // }

    twoSum( nums, target) {
        const nums_map = new Map()

        for (let i= 0; i < nums.length; i++) {
            const target_val = target - nums[i]

            if(nums_map.has(target_val)){
                return [ nums_map.get(target_val) , i];
            }else {
                nums_map.set(nums[i],i)
            }
        }

        return []
    } 
}
