class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /*
        * constraints -> only alphaNumeric, case-insensitive
        */

        let l = 0, r = s.length - 1

        while (l < r) {
            while(l < r && !this.isAlphaN(s[l])) l++

            while(r > l && !this.isAlphaN(s[r])) r--

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false

            l++, r--;
        }

        return true

    }

    isAlphaN(s) {
        return (s >= 'a' && s <= 'z' ||
                s >= 'A' && s <= 'Z' ||
                s >= '0' && s <= '9' ) 
    }
}
