console.log('Tower of Hanoi')

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

// Explanation
// 1. Move n-1 disks from A to B using C as auxiliary.
// 2. Move the remaining disk from A to C.
// 3. Move the n-1 disks from B to C using A as auxiliary.

towerOfHanoi(3, 'A', 'C', 'B')
