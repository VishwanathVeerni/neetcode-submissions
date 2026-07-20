class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs.length) return '';

        let res = '';

        strs.forEach(str => {
            res += str.length + '#' + str;
        })

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str.length) return [];

        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while(str[j] !== '#' && j < str.length) {
                j++;
            }        

            const len = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + len;

            res.push(str.substring(i, j));

            i = j
        }

        

        return res;
    }
}
