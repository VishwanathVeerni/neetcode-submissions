class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
    // Object.groupBy returns a Object
    const groupedAnagrams = Object.groupBy(strs, (str) => {
            const bucket = new Array(26).fill(0)
            for (let char of str) {
                bucket[char.charCodeAt() - 'a'.charCodeAt()]++
            }

            return bucket

        })

    return Object.values(groupedAnagrams)
    }
}
