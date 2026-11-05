class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    //Optimal 
    characterReplacement(s, k) {
        let l = 0,
            res = 0,
            maxF = 0
        const count = {}

        for (let r = 0 ; r < s.length ; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1
            maxF = Math.max(maxF, count[s[r]])

            if( r - l + 1 - maxF > k ) {
                count[s[l]]--
                l++
            }

            res = Math.max(res, r - l + 1)
        }    

        return res
    }


    
    // characterReplacement(s, k ) {
    // // S = "AAABABB", K = 1
    //     let l = 0 ,
    //         res = 0
    //     const count  = {}

    //     for (let r = 0 ; r < s.length ; r++ ) {
    //         count[s[r]] = (count[s[r]] || 0) + 1
    //         const maxF = Object.values(count).reduce((acc, ele) => Math.max(ele,acc), 0)

    //         if( r - l + 1 - maxF <= k){
    //             res = Math.max(res, r - l + 1)
    //         }else {
    //             count[s[l]] = count[s[l]] - 1               
    //             l++
    //         }
    //     }

    //     return res
    // }



    //BruteForce
    // characterReplacement(s, k) {
    //    let res= 0 



    //    for ( let i = 0 ; i < s.length - 1; i++) {
    //      let count = 1
    //      for ( let j = i + 1 ; j < s.length ; j++ ) {
    //         if( s[j] !== s[i]) {
    //             if (k > 0){
    //                 k--
    //             }else{
    //                 break
    //             }
    //         }
    //         count++
    //      }

    //      res = Math.max(res, count)
    //    }

    //    return res

    // }
}
