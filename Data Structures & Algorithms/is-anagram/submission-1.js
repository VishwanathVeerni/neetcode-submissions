class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s,t) {
        if(s.length !== t.length) {
            return false
        }

        const arr = new Array(26).fill(0)

        // loop thru the strings and
        //  for the first string increment the letter position
        //  for the second string decrement

        for(let i = 0; i < s.length ; i++) {
            arr[s[i].charCodeAt() - 'a'.charCodeAt()]++
            arr[t[i].charCodeAt() - 'a'.charCodeAt()]--
        }

        return arr.every(x => x === 0)
    }


    // isAnagram(s, t) {
    //     if(s.length !== t.length) {
    //         return false
    //     }

    //     // Compare after sort
    //     return s.split('').sort().join('') === t.split("").sort().join('')
    // }
}
