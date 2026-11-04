class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // Optimal
    lengthOfLongestSubstring(s) {
        let l = 0 , res = 0
        const charMap = new Map()

        for (let r = 0 ; r < s.length ; r++) {
            if ( charMap.has(s[r])) {
                l = Math.max(l, charMap.get(s[r]) + 1) 
            }

            charMap.set(s[r], r)
            res = Math.max(res, r - l + 1)
        }

        return res
    }

    
    // lengthOfLongestSubstring(s) {
    //     let l = 0, 
    //         res = 0
    //     const charSet = new Set()

    //     for (let r = 0 ; r < s.length ; r++) {
    //         while( charSet.has(s[r])) {
    //             charSet.delete(s[l])
    //             l++
    //         }
            
    //         charSet.add(s[r])
    //         res = Math.max(res, charSet.size)
    //     }

    //     return res

    // }

    // lengthOfLongestSubstring(s) {
    //     let res = 0 

    //     for ( let i = 0 ; i < s.length; i ++ ) {
    //         const charSet = new Set()
    //         for ( let j = i; j < s.length; j++) {
    //             if(charSet.has(s[j]))
    //                 break
    //             charSet.add(s[j])
    //         }

    //         res = Math.max(res, charSet.size)
    //     }

    //     return res
    // }
}
