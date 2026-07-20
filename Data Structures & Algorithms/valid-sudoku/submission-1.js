class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows= new Map()
        const cols= new Map()
        const box= new Map()

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9 ; c++ ) {
                if(board[r][c] === '.') continue;

                const boxKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if(
                    rows.get(r)?.has(board[r][c]) || 
                    cols.get(c)?.has(board[r][c]) ||
                    box.get(boxKey)?.has(board[r][c])
                 ){
                    return false;
                 }

                if(!rows.has(r)) rows.set(r, new Set())
                if(!cols.has(c)) cols.set(c, new Set())
                if(!box.has(boxKey)) box.set(boxKey, new Set())

                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c])
                box.get(boxKey).add(board[r][c])
            }
        }

        return true

    }
}
