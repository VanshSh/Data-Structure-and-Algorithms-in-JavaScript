class Queue {
    constructor() {
        this.items = []
    }
    // To add an element to the queue
    enqueue(element) {
        this.items.push(element)
    }

    // To remove an element from the queue
    dequeue() {
        return this.items.shift()
    }
    // To check if the queue is empty
    isEmpty() {
        return this.items.length === 0
    }
    // To get the front element of the queue
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    // To get the size of the queue
    size() {
        return this.items.length
    }
    // To print the queue
    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
console.log(queue.peek())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue() // Since we are using shift() to remove the first element, the first element will be removed
queue.print()
