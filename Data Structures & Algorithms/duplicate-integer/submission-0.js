class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    /**
     * hasDuplicate(nums) {
        //BruteForce
        for(let i = 0 ; i< nums.length ; i++) {
            for (let j = 0; j < nums.length; j++){
                if(i != j && nums[i] == nums[j] ) {
                    return true
                }
            }
        }

        return false;
    }*/


    /**
     hasDuplicate(nums) {
        //HashSet
        let numSet = new Set()

        for ( const num of nums) {
            if(numSet.has(num)) return true

            numSet.add(num)
        }

        return false
        }
    */

       hasDuplicate(nums) {
              return new Set(nums).size < nums.length
       }
   
}
