console.log('Merge Sort in Increasing Order')

function mergeSortSplitArr(arr) {
    if (arr.length < 2) {
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)
    console.log('leftArr: ', leftArr)
    console.log('rightArr: ', rightArr)

    return mergeSortInc(mergeSortSplitArr(leftArr), mergeSortSplitArr(rightArr))
}

//  Explantion:
// If array with less than 2 elements, return array
// If array with more than 2 elements, split array into two arrays
// Call mergeSortInc function to merge the two arrays

function mergeSortInc(leftArr, rightArr) {
    let sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [1, 5, 2, 8, 3, 4]
console.log(mergeSortSplitArr(arr))
