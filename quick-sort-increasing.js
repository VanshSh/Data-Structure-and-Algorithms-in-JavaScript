// console.log('Quick Sort in Increasing Order')

// function quickSortInc(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     const pivotIndex = Math.floor(arr.length / 2)
//     const pivot = arr[pivotIndex]

//     const left = []
//     const right = []

//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIndex) {
//             continue
//         }
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSortInc(left), pivot, ...quickSortInc(right)]
// }

// //Explanation:
// // First find the pivot in our case it is middle element you can take any element as pivot
// // Then we will partition the array into two parts
// // One part will have elements less than pivot and other part will have elements greater than pivot
// // Then we will sort both the parts recursively
// // And finally we will merge the two parts
// // ...left part,pivot,...right part
// // At the top we will condition if the arr length is less than 2 then we will return the array

// const arr = [8, 20 - 2, -4, -6, 0, 2]
// console.log(quickSortInc(arr))
