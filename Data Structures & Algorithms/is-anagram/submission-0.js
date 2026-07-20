class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    /**
     isAnagram(s, t) {
        if(s.length != t.length) return false

        const s_sorted = s.split('').sort().join('')
        const t_sorted = t.split('').sort().join('')

        return s_sorted === t_sorted
    }
    */

    isAnagram(s, t) {
        if(s.length != t.length) return false

        const count = new Array(26).fill(0)

        for(let i = 0 ; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return count.every(x => x === 0)
    }
}
