console.log('Merge sort Decreasing')

function mergeSortSplitArr(arr) {
    if (arr.length < 2) {
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)

    return mergeSortDec(mergeSortSplitArr(leftArr), mergeSortSplitArr(rightArr))
}

function mergeSortDec(leftArr, rightArr) {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] > rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [1, 5, 2, 8, 3, 4]
console.log(mergeSortSplitArr(arr))
