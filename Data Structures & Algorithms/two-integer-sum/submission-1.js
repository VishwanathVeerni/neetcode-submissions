class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const numsHash = new Map()

        for (let i = 0 ; i < nums.length; i++) {
            const diff = target - nums[i]

            if(numsHash.has(diff)) {
                return [Math.min(i, numsHash.get(diff)),
                        Math.max(i, numsHash.get(diff))]
            }

            numsHash.set(nums[i], i)
        }
    }

    // twoSum(nums, target) {
    //     const numsHash = new Map(Object.entries(nums))

    //     for (let i = 0 ; i < nums.length ; i++) {
    //         const valueToFind = target - nums[i]
    //         const numsHashEntries = [...numsHash.entries()]

    //         if(numsHashEntries.some(row => row.includes(valueToFind))){
    //             return [i, Number(numsHashEntries.find(([key,value]) => value === valueToFind)?.[0])]
    //         } 
    //     }
    // }

    // twoSum(nums, target) {
    //     nums.sort((a,b) => a - b)

    //     let i = 0, j = nums.length - 1

    //     while (i<j) {
    //         const curr = nums[i] + nums[j]
    //         if(curr > target) {
    //             j--
    //         }else if(curr < target) {
    //             i++
    //         }else {
    //             return [i,j]
    //         }
    //     }
    // }
}
