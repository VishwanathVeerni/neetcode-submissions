class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // topKFrequent(nums, k) {
    //  //Sorting
    //  const freqMap = new Map()

    //  nums.forEach(val =>{
    //     freqMap.set( val , (freqMap.get(val) || 0) + 1)
    //  })

    //  const sorted_arr = [...freqMap.entries()].sort((a,b) => b[1]- a[1])
     
    //  return sorted_arr.slice(0,k).map(cur => cur[0])

    // }

    // topKFrequent(nums, k) {
    //     //Using Heaps
    //     if(!nums.length) return [];

    //     const count = {};
    //     const res = []

    //     nums.forEach(num => {
    //         count[num] = (count[num] || 0) + 1; 
    //     })

    //     const minHeap = new MinPriorityQueue(x => x[1])

    //     Object.entries(count).forEach(([num, count]) => {
    //         minHeap.enqueue([num, count])
    //         if(minHeap.size() > k ) minHeap.dequeue()
    //     })

    //     for(let i = 0; i< k ; i++ ) {           
    //         const [num]= minHeap.dequeue()
    //         res.push( num )
    //     }

    //     return res
    // }

    topKFrequent(nums, k) {
        if(!nums.length) return []

        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => [])
        const res = []

        nums.forEach(num => {
            count[num] = (count[num] || 0) + 1;
        })

        for( const [num,ctn] of Object.entries(count)) {
            freq[ctn].push(Number(num))
        }

        for(let i = freq.length - 1; i>0 ; i--) {
            for ( const num of freq[i] ) {
                res.push(num);
                if(res.length === k) return res;
            }

        }
    }
}
