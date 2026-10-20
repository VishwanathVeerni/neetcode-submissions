class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const output = {} 

    //     for ( let i = 0 ; i < strs.length; i++ ) {
    //         const key = new Array(26).fill(0)

    //         for (let j = 0 ; j < strs[i].length ; j++) {
    //             key[ strs[i][j].charCodeAt() - 'a'.charCodeAt() ]++
    //         }

    //         if(output[key] === undefined) {
    //             output[key] = []
    //         }

    //         output[key].push(strs[i])
    //     }

    //     return Object.values(output)
    // }

    groupAnagrams(strs) {
        return Object.values(Object.groupBy(strs, (str) => {
            const key = new Array(26).fill(0)

            for ( const char of str) {
                key[ char.charCodeAt() - 97 ]++
            }

            return key
        }))
    }
}
