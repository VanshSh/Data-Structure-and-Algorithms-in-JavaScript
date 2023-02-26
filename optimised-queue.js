class OptimisedQueue {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }
    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty() {
        return this.rear - this.front === 0
    }
    peek() {
        return this.items[this.front]
    }
    size() {
        return this.rear - this.front
    }
    print() {
        const items = Object.values(this.items)
        console.log(items.toString())
    }
}

const queue = new OptimisedQueue()

queue.enqueue(1)
queue.enqueue(24)
queue.enqueue(3)
queue.print()
console.log(queue.peek())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue() // Since we are using shift() to remove the first element, the first element will be removed
queue.print()
