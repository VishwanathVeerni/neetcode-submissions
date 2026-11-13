class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []
        const posSpeed = new Array(position.length)

        for ( let i = 0 ; i < position.length ; i ++) {
            posSpeed[i] = [position[i], speed[i]]
        }

        posSpeed.sort((a,b) => b[0] - a[0])

        for ( let i = 0 ; i < posSpeed.length ; i++ ) {
            const timeToTarget = ( target - posSpeed[i][0] ) / posSpeed[i][1]

            if( stack.length === 0 || stack[stack.length - 1] < timeToTarget ) {
                stack.push(timeToTarget)
            }
        }

        return stack.length

    }
}
