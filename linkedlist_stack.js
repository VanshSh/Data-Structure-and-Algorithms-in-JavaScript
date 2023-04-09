class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }
    push(value) {
        this.list.prepend(value)
    }
    pop(value) {
        return this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        this.list.print()
    }
}
const stack = new LinkedListStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
