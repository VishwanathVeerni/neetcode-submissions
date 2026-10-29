class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1

        while (l < r) {
            const curr = numbers[l] + numbers[r]

            if( curr > target) {
                r--
            }else if( curr < target) {
                l++
            }else {
                return [l + 1 ,r + 1]
            }
        }

        return []
    }
}
