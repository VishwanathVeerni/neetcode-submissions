class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        /*
        * constraints -> nums Arr, asc, idx 1 + 2 = target , 1 sol for sure
        */

        let i = 0 , j = numbers.length - 1

        // while(numbers[i] + numbers[j] > target) j--

        // while(numbers[i] + numbers[j] < target) i++

        // if(numbers[i] + numbers[j] === target) return [i+1, j+1]

        // return []

        while(i < j) {
            const currSum = numbers[i] + numbers[j]

            if(currSum > target){
                 j--
            }else if(currSum < target){
                 i++
            }else{
                 return [i+1, j+1]
            }
        }

        return []
    }
}
