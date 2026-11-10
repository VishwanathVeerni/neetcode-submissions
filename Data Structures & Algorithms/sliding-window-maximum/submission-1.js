class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0 , r = 0
        
        const max = []
        const deque = new Deque2()

        while ( r < nums.length) {

            if( deque.size() && deque.front() <= r - k){
                deque.popFront()
            }
            
            while( deque.size() && nums[deque.back()] < nums[r]){
                deque.pop()
            }

            deque.push(r)

            if( r - l + 1 === k) {
                max.push(nums[deque.front()])
                l++
            }

            r++
        }

        return max
    }
}


class Deque2 {
    /**
     * pop  - front/back
     * push - front/back
     * size
     * front 
     * back
     */

    constructor() {
        this.items = []
        this.head = 0
        this.tail = 0
    }

    popFront() {
        if(this.size() === 0)
            return undefined
        
        return  this.items[this.head++]
    }

    pop() {
        if( this.size() === 0)
            return undefined
        
        return this.items[--this.tail]
    }

    push(ele) {
        this.items[this.tail++] = ele

        return ele
    }

    front() {
        return this.items[this.head]
    }

    back() {
        return this.items[this.tail - 1]
    }

    size() {
        return this.tail - this.head
    }


}