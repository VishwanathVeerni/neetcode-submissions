class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // Time Complexity : m * nlogn
    // groupAnagrams(strs) {
        
    //     const count = {}

    //     for (const str of strs){
    //         const sorted = str.split('').sort().join('')
    //         if(count[sorted] === undefined) 
    //             count[sorted] = []
    //         count[sorted].push(str)            
    //     }

    //     return Object.values(count)

    // }

    //Time Complexity: m * n
    groupAnagrams(strs) {
        const res = {}

        for(const str of strs) {
            const count = new Array(26).fill(0)
            for(const s of str) {
                count[s.charCodeAt() - 97]++
            }

            if(res[count] === undefined) {
                res[count] = []
            }

            res[count].push(str)
        }

        return Object.values(res)
    }
}
