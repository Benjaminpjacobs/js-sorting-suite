var assert = require('chai').assert;
var MergeSort = require('../merge_sort/merge-sort')

describe('MergeSort', function() {
    it('should sort one number', function() {
        var sorter = new MergeSort
        var unsorted = [1]
        assert.deepEqual(sorter.sort(unsorted), [1])
    })

    it('should sort two numbers', function() {
        var sorter = new MergeSort
        var unsorted = [2, 1]
        assert.deepEqual(sorter.sort(unsorted), [1, 2])
    })

    it('should sort three numbers', function() {
        var sorter = new MergeSort
        var unsorted = [2, 3, 1, 4]
        assert.deepEqual(sorter.sort(unsorted), [1, 2, 3, 4])
    })

    it('should sort five numbers', function() {
        var sorter = new MergeSort
        var unsorted = [2, 5, 4, 3, 1]
        assert.deepEqual(sorter.sort(unsorted), [1, 2, 3, 4, 5])
    })

    it('should sort four letters', function() {
        var sorter = new MergeSort
        var unsorted = ['b', 'c', 'd', 'a']
        assert.deepEqual(sorter.sort(unsorted), ['a', 'b', 'c', 'd'])
    })

    it('should 6 numbers', function() {
        var sorter = new MergeSort
        var unsorted = [4, 2, 5, 3, 6, 1]
        assert.deepEqual(sorter.sort(unsorted), [1, 2, 3, 4, 5, 6])
    })

    it('should numbers with duplicates', function() {
        var sorter = new MergeSort
        var unsorted = [4, 3, 6, 3, 8, 5, 4, 1]
        assert.deepEqual(sorter.sort(unsorted), [1, 3, 3, 4, 4, 5, 6, 8])
    })

});