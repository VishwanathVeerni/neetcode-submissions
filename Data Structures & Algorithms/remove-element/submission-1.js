class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // for(let i = 0 ; i < nums.length; i++){
        //     if(nums[i] === val) {
        //         nums.splice(i,1);
        //         i--;
        //     }
        // }

        // return nums.length

        let k = 0;

        for (let num of nums) {
            if(num !== val) {
                nums[k] = num;
                k++
            }
        }

        return k
    }
}
