class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        for ( const ch of s ) {
            if(closeToOpen[ch]){
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[ch]) {
                    stack.pop()
                }else {
                    return false
                }
            }else {
                stack.push(ch)
            }
        }

        return stack.length ===  0
    }

    // isValid(s) {
    //     const stack = []
    //     const hashMap = {
    //         '(' : ')',
    //         '[' : ']',
    //         '{' : '}',
    //     }

    //     for ( let i = 0 ; i < s.length ; i ++ ) {
    //         if( s[i] === '(' || s[i] === '{' || s[i] === "[" )
    //             stack.push(s[i])
            
    //         if( s[i] === ')' || s[i] === '}' || s[i] === "]"  ){
    //             const opBracket = stack.pop()
    //             if (s[i] !== hashMap[opBracket] )
    //                 return false
    //         }
    //     }

    //     return stack.length === 0
    // }
}
