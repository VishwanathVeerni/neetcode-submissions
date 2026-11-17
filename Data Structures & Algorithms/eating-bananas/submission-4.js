class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1 , 
        //  r = piles.reduce((acc, ele) => Math.max(acc,ele))
            r = Math.max(...piles),
            minK = r

        while (l <= r) {
            const mid  = l + Math.floor(((r - l) / 2))
            let time = 0 

            for(const p of piles) {
                time += Math.ceil(p / mid)
            }

            if(time <= h) {
                r = mid - 1
                minK = mid
            }else {
                l = mid + 1
            }
        }

        return minK
    }
}
