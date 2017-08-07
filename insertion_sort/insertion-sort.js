class InsertionSort {
    constructor() {};

    sort(collection) {
        if (collection.length === 1) {
            return collection;
        } else {
            var sorted = [];
            var iterations = collection.length;
            var sortNum = 0
            this.addToSorted(iterations, collection, sorted, sortNum);
            return sorted;
        }
    }

    addToSorted(iterations, collection, sorted, sortNum) {
        for (var i = 0; i < iterations; i++) {
            sortNum = collection.shift();
            if (sorted.length === 0) {
                sorted.push(sortNum);
            } else {
                this.checkSorted(sorted, sortNum);
            }
        }
    }

    checkSorted(sorted, sortNum) {
        for (var n = (sorted.length - 1); n >= 0; n--) {
            if (sorted[n] <= sortNum) {
                sorted.splice(n + 1, 0, sortNum)
                break;
            } else if (sorted[n] > sortNum && n === 0) {
                sorted.unshift(sortNum);
                break;
            }
        }
    }
};




module.exports = InsertionSort;