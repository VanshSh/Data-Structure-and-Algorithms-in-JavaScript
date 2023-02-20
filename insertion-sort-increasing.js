console.log('Insertion Sort in Increasing Order')

function insertInc(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numberToInsert
    }
}

// Explanation:
// arr[0] is already sorted
// arr[1] is compared with arr[0] and inserted in the correct position
// arr[2] is compared with arr[1] and arr[0] and inserted in the correct position and so on.....
// For this we have used while loop where if the number to be inserted is less than the number in the array, we shift the number in the array to the right and decrement the index of the array

const arr = [5, 3, 8, -2, 1, 4, -6, 9, 7, 0, 2]
insertInc(arr)
console.log(arr)
