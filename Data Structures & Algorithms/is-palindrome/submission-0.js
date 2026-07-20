class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;

        while(i < j) {
            while(i < j && !isAlpha(s[i])){
                i++;
            }

            while(i < j && !isAlpha(s[j])) {
                j--;
            }

            if(s[i].toLowerCase() !== s[j].toLowerCase()) 
                return false;

            i++, j--
        }

        return true;
    }
}

function isAlpha(c) {
    return (
        c >= 'A' && c <= 'Z' || 
        c >= 'a' && c <= 'z' || 
        c >= '0' && c <= '9'
    )
}
