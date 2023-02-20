console.log('Binary Search')

function bubbleSortInc(arr, target) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return binarySearch(arr, target)
}

function binarySearch(arr, target) {
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        if (arr[middle] === target) {
            return middle
        }
        if (arr[middle] < target) {
            min = middle + 1
        }
        if (arr[middle] > target) {
            max = middle - 1
        }
    }
    return -1
}

const arr = [5, 3, 8, -2, 1, 4, -6, 9, 7, 0, 2]

console.log(bubbleSortInc(arr, 2))
console.log(arr)
