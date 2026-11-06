class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    //optimal
    checkInclusion(s1, s2) {
        if(s1.length > s2.length)
            return false

        const s1Bucket = new Array(26).fill(0)
        const s2Bucket = new Array(26).fill(0)

        for (let i = 0 ; i < s1.length ; i++) {
            s1Bucket[s1[i].charCodeAt() - 97]++
            s2Bucket[s2[i].charCodeAt() - 97]++
        }

        let matches = 0
        for(let i = 0 ; i < 26 ; i++) {
            if(s1Bucket[i] === s2Bucket[i])
                matches++
        }

        if(matches === 26) 
            return true

        let r = s1.length  
        for( let l = 0 ; r < s2.length ; l++, r++) {
            let idx = s2[l].charCodeAt() - 97
            if( s1Bucket[idx] === s2Bucket[idx])
                matches--
            
            s2Bucket[idx]--

            if( s1Bucket[idx] === s2Bucket[idx])
                matches++

            idx = s2[r].charCodeAt() - 97
            if( s1Bucket[idx] === s2Bucket[idx])
                matches--
            
            s2Bucket[idx]++

            if( s1Bucket[idx] === s2Bucket[idx])
                matches++

            if( matches === 26)
                return true
        }      

        return false

    }


    //O(n)
    // checkInclusion(s1,s2) {
    //     if (s1.length > s2.length) 
    //         return false

    //     const s1Bucket = new Array(26).fill(0)
    //     const s2Bucket = new Array(26).fill(0)

    //     for (let i = 0 ; i < s1.length ; i++ ) {
    //         s1Bucket[s1[i].charCodeAt() - 97]++
    //         s2Bucket[s2[i].charCodeAt() - 97]++
    //     }

    //     let matches = 0
    //     for(let i = 0 ; i < 26 ; i++) {
    //         if(s1Bucket[i] === s2Bucket[i])
    //             matches++
    //     }

    //     if(matches === 26) 
    //         return true

    //     let r = s1.length
    //     for(let l = 0; l < s2.length - s1.length ; l++) {
    //         let idx = s2[l].charCodeAt() - 97
    //         if( s1Bucket[idx] === s2Bucket[idx]) {
    //             s2Bucket[idx]--
    //             if(s1Bucket[idx] !== s2Bucket[idx])
    //                 matches--

    //         }else {
    //             s2Bucket[idx]--
    //             if( s1Bucket[idx] === s2Bucket[idx])
    //                 matches++

    //         }

    //         idx = s2[r].charCodeAt() - 97
    //         if( s1Bucket[idx] === s2Bucket[idx]) {
    //             s2Bucket[idx]++
    //             if( s1Bucket[idx] !== s2Bucket[idx])
    //                 matches--
    //         }else {
    //             s2Bucket[idx]++
    //             if( s1Bucket[idx] === s2Bucket[idx])
    //                 matches++
    //         }

    //         if(matches === 26)
    //             return true

    //         r++
    //     }

    //     return false
    // }

    // O(26.n)
    // checkInclusion(s1, s2) {
    //     if(s1.length > s2.length)
    //         return false

    //     const bucket = new Array(26).fill(0)

    //     for (let i = 0; i < s1.length; i++) {
    //         bucket[s1[i].charCodeAt() - 97]++
    //         bucket[s2[i].charCodeAt() - 97]--
    //     }

    //     if (bucket.every(ele => ele === 0)){
    //             return true
    //         }

    //     let r = s1.length
    //     for (let l = 0; l < s2.length - s1.length; l++) {
    //         bucket[s2[l].charCodeAt() - 97]++
    //         bucket[s2[r++].charCodeAt() - 97]--
            
    //         if (bucket.every(ele => ele === 0)){
    //             return true
    //         }

            
    //   }

    //     return false
    // }
}
