class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = ''

        for(const str of strs) {
            encoded_string += str.length + '#'+ str
        }

        return encoded_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded_strs = []

        let i = 0, strLen = '' 
        while (i < str.length) {
            if (str[i] === '#') {
                const startIndex = i + 1
                const endIndex = startIndex + parseInt(strLen)
                decoded_strs.push(str.slice(startIndex, endIndex))
                i = endIndex
                strLen = ''
            }else {
                strLen += str[i++]
            }
        }

        return decoded_strs



    }
}
