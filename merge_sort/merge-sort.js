class MergeSort {
    constructor() {};
    sort(collection) {
        if (collection.length <= 1)
            return collection;

        var left = collection.slice(0, collection.length / 2)
        var right = collection.slice(collection.length / 2, collection.length)

        left = this.sort(left);
        right = this.sort(right);

        return this.merge(left, right)

    };

    merge(left, right) {
        var result = []
        this.combineSides(left, right, result);
        this.leftOver(left, result);
        this.leftOver(right, result);
        return result;
    };

    combineSides(left, right, result) {
        while (left.length !== 0 && right.length !== 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            };
        };
    };

    leftOver(side, result) {
        while (side.length !== 0) {
            result.push(side.shift())
        };
        return result;
    };
};

module.exports = MergeSort;