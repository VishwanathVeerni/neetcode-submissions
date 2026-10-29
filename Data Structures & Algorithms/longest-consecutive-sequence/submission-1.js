//Hash Set (O(n))
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums)

        let streak = 0

        for ( let i = 0 ; i < nums.length ; i ++) {
            if (!hashSet.has(nums[i] - 1)) {
                let length = 1

                while( hashSet.has(nums[i] + length)) {
                    length++
                }

                streak = Math.max(streak, length)
            }
        }

        return streak
    }   
}

//Sorting (O(n logn))
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     longestConsecutive(nums) {
//         const numsSorted = nums.sort((a,b) => a - b)
//         let l = 0 , r = 1
//         let lc = 1
//         let count = 1

//         while(r < nums.length) {
//             if (nums[r - 1] === nums[r] ) {
//                 r++
//                 continue
//             }

//             if(nums[ r - 1 ] + 1 === nums[r]) {
//                 count++
//             }else {
//                 lc = Math.max(lc, count)
//                 l = r
//                 count = 1
//             }

//             r++
//         }

//         return Math.max(lc, count)

//     }
// }


//Brute Force (O(n^2))
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     longestConsecutive(nums) {
//         const set = new Set(nums)
//         let lc = 0

//         for( let i = 0 ; i < nums.length ; i ++) {
//             let count = 1
            
//             while( set.has( nums[i] + count) ){
//                 count++
//             }

//             lc = Math.max(count, lc)
//         }

//         return lc
//     }
// }