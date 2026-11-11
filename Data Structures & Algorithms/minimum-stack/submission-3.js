class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const curr = this.stack.length === 0 ? 0 : (val - this.min) 
        this.stack.push(curr)
        this.min = Math.min(this.min, val)
    }

    /**
     * @return {void}
     */
    pop() {
        const curr = this.stack.pop()
        if(curr < 0) 
            this.min = this.min - curr
        if(this.stack.length === 0)
            this.min = Infinity
        
    }

    /**
     * @return {number}
     */
    top() {
        const val = this.stack[this.stack.length - 1]

        return val < 0 ? this.min : val + this.min
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}



// O(n) space 
// class MinStack {
//     constructor() {
//         this.stack = []
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     push(val) {
//         const len = this.stack.length

//         if(len === 0) {
//             this.stack.push([val,val])
//         }else {
//             const min = Math.min(val, this.stack[len - 1][0] )
//             this.stack.push([min,val])
//         }
//     }

//     /**
//      * @return {void}
//      */
//     pop() {
//         this.stack.pop()
//     }

//     /**
//      * @return {number}
//      */
//     top() {
//         return this.stack[this.stack.length - 1][1]
//     }

//     /**
//      * @return {number}
//      */
//     getMin() {
//         return this.stack[this.stack.length - 1][0]
//     }
// }