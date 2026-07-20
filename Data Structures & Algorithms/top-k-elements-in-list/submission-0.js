class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     //HashMap
     const freqMap = new Map()

     nums.forEach(val =>{
        freqMap.set( val , (freqMap.get(val) || 0) + 1)
     })

     const sorted_arr = [...freqMap.entries()].sort((a,b) => b[1]- a[1])
     
     return sorted_arr.slice(0,k).map(cur => cur[0])

    }
}
