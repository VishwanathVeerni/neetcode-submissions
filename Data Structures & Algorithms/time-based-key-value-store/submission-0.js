class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const obj = this.keyStore

        if (!obj.has(key))
            obj.set(key, [])
        
        obj.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key) || []
        let l = 0,
            r = list.length - 1,
            result = ''

        while ( l <= r ) {
            const mid = l + Math.floor((r - l) / 2)

            if( list[mid][0] <= timestamp ){
                l = mid + 1
                result = list[mid][1]
            }else {
                r = mid - 1
            }
        }

        return result
    }
}
