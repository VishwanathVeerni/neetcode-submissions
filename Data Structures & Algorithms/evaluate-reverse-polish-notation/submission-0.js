class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const op = {
            '+' : (a, b) => a + b,
            '-' : (a, b) => b - a,
            '*' : (a, b) => a * b,
            '/' : (a, b) => Math.trunc(b / a)
        }
    

        for ( let i = 0 ; i < tokens.length ; i ++ ) {
            
            if(op[tokens[i]]){
                const num1 = Number(stack.pop())
                const num2 = Number(stack.pop())

                stack.push( op[tokens[i]](num1, num2))

            }else{
               stack.push(tokens[i])
            }

        }

        return stack.pop()
    }
}
