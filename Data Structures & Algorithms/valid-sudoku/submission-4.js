// Hash Set single pass
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: board.length}, () => new Set())
        const cols = Array.from({length: board.length}, () => new Set())
        const boxes = Array.from({length: board.length}, () => new Set())

        for ( let i = 0 ; i < board.length ; i++ ) {
            for ( let j = 0 ; j < board[i].length ; j++) {
                if(board[i][j] === '.') continue

                const curr = board[i][j]
                const boxIdx = Math.floor(i/3) * 3 + Math.floor(j/3)

                if(rows[i].has(curr) || cols[j].has(curr) || boxes[boxIdx].has(curr))
                    return false

                rows[i].add(curr)
                cols[j].add(curr)
                boxes[boxIdx].add(curr)
            }
        }

        return true
    }    
}

// Brute Force
// class Solution {
//     /**
//      * @param {character[][]} board
//      * @return {boolean}
//      */
//     isValidSudoku(board) {

//         // Validating the Rows
//         for ( let i = 0 ; i < board.length ; i++ ) {
//             if(!this.isValid(board[i]))
//                 return false
//         }

//         // Validating the Cols
//         for ( let i = 0 ; i < board.length ; i++){
//             const arr = []

//             for ( let j = 0 ; j < board[i].length ; j++) {
//                 arr.push(board[j][i])
//             }

//             if(!this.isValid(arr))
//                 return false
//         }

//         // Validating the Boxes
//         for ( let box = 0 ; box < board.length ; box++) {
//             const arr = []

//             for ( let i = 0 ; i < 3 ; i ++ ) {
//                 for ( let j = 0 ; j < 3 ; j ++ ) {
//                     const row = i + ( 3 * Math.floor(box / 3) )
//                     const col = j + ( 3 * ( box % 3 ) )
//                     arr.push(board[row][col])        
//                 }
//             }

//             if(!this.isValid(arr))
//                 return false
//         }

//         return true

//     }

//     isValid(arr) {
//         const bucket = new Array( arr.length + 1 ).fill(0)

//         for ( const num of arr ) {
//             if (num === '.') continue
//             bucket[num]++
//         }

//         return bucket.every((count) => count < 2 )
//     }
// }