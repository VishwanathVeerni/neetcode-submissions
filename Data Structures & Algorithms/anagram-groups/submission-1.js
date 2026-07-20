class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const ans = {} 

    //     for (let str of strs) {
    //         const sortedKey = str.split('').sort().join()

    //         if(!ans[sortedKey]){
    //             ans[sortedKey] = []
    //         }

    //         ans[sortedKey].push(str)
    //     }

    //     return Object.values(ans)
    // }

    groupAnagrams(strs) {
        const ans = {}

        for (let str of strs) {
            // new Array(3);      [ <3 empty items> ] -> ",,,"
            // new Array(3).fill(0);   [0,0,0]        -> "0,0,0"  

            const arrKey = new Array(26).fill(0)

            for (let char of str.split('')) {
                //using 0 is good practise
                arrKey[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            if (!ans[arrKey]) {
                ans[arrKey] = []
            }

            ans[arrKey].push(str)
        }

        return Object.values(ans)
    }
}
