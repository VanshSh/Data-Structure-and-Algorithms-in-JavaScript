console.log('cartesian-product.js')

function cartesianProduct(arr1, arr2) {
    let cartesianArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            cartesianArray.push([arr1[i], arr2[j]])
        }
    }
    return cartesianArray
}

// Explanation:
// Loop through the first array
// Loop through the second array
// Push the first array element and the second array element into the new array
// Big O: O(nxm) because we have two loop of different sizes

console.log(cartesianProduct([1, 2], [3, 4, 5]))
