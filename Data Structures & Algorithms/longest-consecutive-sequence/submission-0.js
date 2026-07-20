class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums)
        let res = 0;


        for(const num of nums) {
            if(numSet.has(num - 1)) continue

            let streak = 0;
            let curr = num;

            while(numSet.has(curr)){
                streak++;
                curr++;
            }

            res = Math.max(res, streak)
        }

        return res

    }
}
