class Bubblesort {
    constructor() {}

    swap(i, collection) {
        var a = collection[i];
        var b = collection[(i + 1)];
        collection[i] = b;
        collection[(i + 1)] = a;
        return collection;
    }

    singlePass(collection) {
        for (var i = 0; i < collection.length; i++) {
            if (i !== collection.length && collection[i] > collection[i + 1]) {
                this.swap(i, collection);
            }
        };
        return collection;
    }

    sort(collection) {
        for (var i = 0; i < collection.length; i++) {
            this.singlePass(collection);
        };
        return collection;
    }
}

module.exports = Bubblesort;