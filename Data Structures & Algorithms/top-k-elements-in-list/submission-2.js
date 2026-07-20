class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => [])
        const res = []

        for (let num of nums) { 
            count[num] = (count[num] || 0) + 1
        }

        for( let num in count) {
            freq[count[num]].push(parseInt(num))
        }

        for (let i = freq.length - 1; i > 0 ; i--) {
           for(let j of freq[i]) {
                res.push(j)
                if(res.length === k)
                    return res
            }
        }

    }
    
    // topKFrequent(nums, k) {
    //     const frequency = {}

    //     for (let i = 0 ; i < nums.length ; i++){
    //         frequency[nums[i]] = ( frequency[nums[i]] || 0 ) + 1
    //     }

    //     const sortedFreq = Object.entries(frequency).sort((a,b) => a[1] - b[1])
        
    //     return (sortedFreq.map(arr => arr[0])).slice(-k)
    // }
}
