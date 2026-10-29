class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0 , r = s.length - 1

        while( l < r ){
            // if(s[l] >= 'a' && s[l] <= 'z' ||
            //    s[l] >= 'A' && s[l] <='Z'  ||
            //    s[l] >= 0 && s[l] <= 9 ) {}

            if( !/[a-zA-Z0-9]/.test(s[l])){
                l++
                continue
            }
            
            if( !/[a-zA-Z0-9]/.test(s[r])){
                r--
                continue
            }
                    
            if (s[l].toLowerCase() !== s[r].toLowerCase() )
                return false
            
            l++ 
            r--
        }

        return true
    }
}
