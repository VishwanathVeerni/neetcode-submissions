class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {} 
        const bucket = Array.from({length: nums.length + 1},() => [])
        const res = []

        for ( let i = 0 ; i < nums.length ; i++) {
            count[nums[i]] = ( count[nums[i]] || 0 ) + 1
        }

        for ( const [key, val] of Object.entries(count)) {
            bucket[val].push(Number(key))
        }

        // for ( let i = bucket.length - 1 ; i > 0 ; i-- ) {
        //     res.push(...bucket[i])
        //     if(res.length >= k)
        //         return res.slice(0,k)
        // }

        for ( let i = bucket.length - 1 ; i > 0 ; i--) {
            for ( const num of bucket[i]) {
                res.push(num) 
                if( res.length === k) {
                    return res
                }
            }
        }

        return []

    }
}
