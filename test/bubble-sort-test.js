var assert = require('chai').assert;
var Bubblesort = require('../bubble_sort/bubble-sort')

describe('Bubblesort', function() {
    it('should swap two item in array', function() {
        var sorter = new Bubblesort
        var unsorted = [4, 2, 5, 1, 3]
        assert.deepEqual(sorter.swap(0, [2, 1]), [1, 2])
    })

    it('should make single pass', function() {
        var sorter = new Bubblesort
        var unsorted = [4, 2, 5, 1, 3]
        assert.deepEqual(sorter.singlePass(unsorted), [2, 4, 1, 3, 5])
    })

    it('should sort array', function() {
        var sorter = new Bubblesort
        var unsorted = [4, 2, 5, 1, 3]
        assert.deepEqual(sorter.sort(unsorted), [1, 2, 3, 4, 5])
    })

    it('should sort array of letters', function() {
        var sorter = new Bubblesort
        var unsorted = ["d", "b", "a", "c"]
        assert.deepEqual(sorter.sort(unsorted), ["a", "b", "c", "d"])
    })


    it('should sort array of 6', function() {
        var sorter = new Bubblesort
        var unsorted = [3, 1, 6, 4, 2, 5]
        assert.deepEqual(sorter.sort(unsorted), [1, 2, 3, 4, 5, 6])
    })

    it('should sort array with duplicates', function() {
        var sorter = new Bubblesort
        var unsorted = [3, 1, 5, 6, 4, 1, 2, 5]
        assert.deepEqual(sorter.sort(unsorted), [1, 1, 2, 3, 4, 5, 5, 6])
    })
});