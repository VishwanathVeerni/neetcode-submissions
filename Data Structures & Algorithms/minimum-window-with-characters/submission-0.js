class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0, r = 0,
            need = 0 , have = 0,
            resLen = Infinity,
            res = ''
        const count = {}
        const window = {}

        for (const char of t) {
            count[char] = ( count[char] || 0 ) + 1
        }

        need = Object.keys(count).length

        while ( r < s.length ) {
            let char = s[r]
            if(count[char]) {
                window[char] = ( window[char] || 0 ) + 1

                if(window[char] === count[char])
                    have++
            }

            while(have === need){
                if(r - l + 1 < resLen ){
                    res = s.slice(l, r+1)
                    resLen =  res.length
                }
                
                char = s[l]
                if(count[char]){
                    window[char]--

                    if( window[char] < count[char])
                        have--
                }

                l++
            }

            r++
        }

        return res
    }
}
