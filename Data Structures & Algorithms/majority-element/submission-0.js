class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    majorityElement(nums){

        let res = 0, maxCount = 0 ;

        // for ( let i in nums) {
        //     if (maxCount === 0) {
        //         res = nums[i]
        //         maxCount++
        //     }else if(nums[i - 1] === res) {
        //         maxCount++
        //     } else {
        //         maxCount--
        //     }
        // }

        for (let num of nums) {
            if ( maxCount ===0) {
                res = num
            }

            maxCount += (num === res ? 1 : -1 )
        }

        return res

    }

    // majorityElement(nums) {
    //     const numsHash = new Map()
    //     let maxCount = 0, res = 0;

    //     for(let i in nums) {
    //         numsHash.set(nums[i], (numsHash.get(nums[i] || 0) + 1))
    //         res = maxCount > numsHash.get(nums[i]) ? res : nums[i]
    //         maxCount = Math.max(maxCount, numsHash.get(nums[i]))
    //     }

    //     return res
    // }

    // majorityElement(nums) {
    //     const numsHash = new Map()
    //     let maxNum;

    //     for (let num of nums) {
    //         numsHash.set(num,(numsHash.get(num) || 0 ) + 1)
    //     }


    //     for (let [key,value] of numsHash) {
    //         if(!maxNum) {
    //             maxNum = key
    //             continue;
    //         }

    //         maxNum = numsHash.get(maxNum) > value ? maxNum : key
    //     }

    //     return maxNum
    // }
}
