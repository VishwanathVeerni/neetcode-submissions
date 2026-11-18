class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 ,
            r = nums.length -1 
        
        while (l <= r ) {
            const mid = l + Math.floor((r - l) / 2)

            if( nums[mid] === target) {
                return mid
            }

            // pivot is on right
            if(nums[mid] >= nums[l]){
                if(target < nums[mid] && target < nums[l]|| target > nums[mid]){
                    l = mid + 1
                }else{
                    r = mid - 1
                }
            }else { 
            // pivot is on left
                if(target > nums[mid] && target < nums[l]) {
                    l = mid + 1
                }else{
                    r = mid - 1
                }
            }
        }

        return -1
    }
}
