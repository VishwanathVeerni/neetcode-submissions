class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //Rows 
        for(let i = 0; i < board.length; i++) {
            if (!isValid(board[i])) {
                return false
            }
        }

        //Cols
        for( let j = 0; j< board[0].length; j++) {
            const arr = []
            for( let i = 0 ; i < board.length ; i++) {
                arr.push(board[i][j])
            }
            if(!isValid(arr)) {
                return false
            }
        }

        //Box
        for(let i = 0 ; i < board.length; i++) {
            const arr = []
            for ( let j = 0 ; j < 3; j++){
                for (let k = 0 ; k < 3; k++){
                    const row = j + ( 3 * Math.floor(i/3))
                    const col = k + ( 3 * (i%3))
                    arr.push(board[row][col])
                }
            }
            if(!isValid(arr)) {
                return false
            }
        }

        return true

        function isValid(array) {
            const bucket = new Array(10).fill(0)

            for( let i = 0 ; i < array.length; i++){
                //Js coerces the string to num but when learning be explicit
                const num = Number(array[i]) 
                if(num === '.') continue
                if(num < 1 || num > 9) return false
                bucket[num]++
            }

            return bucket.every(x => x < 2)
        }
    }
}
