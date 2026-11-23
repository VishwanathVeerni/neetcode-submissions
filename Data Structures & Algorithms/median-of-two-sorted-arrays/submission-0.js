class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1, 
            B = nums2
        
        if(A.length > B.length)
            [A,B] = [B,A]
        
        const totalLen = A.length + B.length,
              half = Math.floor(( totalLen + 1 ) / 2 )
        
        let l = 0, r = A.length - 1

        while(true) {
            const i = l + Math.floor((r - l) / 2)
            const j = half - i - 2

            const aLeft = i >= 0 ? A[i] : Number.MIN_SAFE_INTEGER,
                  aRight = i + 1 < A.length ? A[i + 1] : Number.MAX_SAFE_INTEGER ,
                  bLeft =  j >= 0 ? B[j] : Number.MIN_SAFE_INTEGER,
                  bRight = j + 1 < B.length ? B[j + 1] : Number.MAX_SAFE_INTEGER

            if ( aLeft <= bRight && bLeft <= aRight) {
                if(totalLen % 2 !== 0){
                    return Math.max(aLeft,bLeft)
                }
                
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight))/ 2
            }else if(aLeft > bRight) {
                r = i - 1
            }else {
                l = i + 1
            }
        }
    }
}
