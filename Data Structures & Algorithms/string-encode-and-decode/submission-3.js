class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    lenPrefix = 3 //because the problem contraints note the len of a str will be under 200 chars

    encode(strs) {
        let res = ""
       
        for (const str of strs) {
            res += `${str.length}`.padStart(this.lenPrefix,0) + str
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       const strs = []
       let i = 0

       while(i < str.length) {
        const currStrLen = Number(str.slice(i, i + this.lenPrefix))
        const startIdx = i + this.lenPrefix
        const endIdx = startIdx + currStrLen
        strs.push(str.slice(startIdx, endIdx))

        i = endIdx
       }

       return strs
    }
}
