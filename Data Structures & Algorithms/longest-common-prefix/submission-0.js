class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans="";

        for (let i = 0; i < strs[0].length ; i++) {
            for (let j = 0; j < strs.length; j++) {
                if(strs[j].length <= i || strs[j][i] !== strs[0][i])
                    return ans
            }
            ans += strs[0][i]
        }

        return ans;
    }
}
