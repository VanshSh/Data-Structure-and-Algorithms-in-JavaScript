class Stack {
    constructor() {
        this.items = []
    }

    // To add an item to the stack
    push(element) {
        this.items.push(element)
    }
    //  To remove an item from the stack
    pop() {
        return this.items.pop()
    }
    // To check the top item of the stack
    peek() {
        return this.items[this.items.length - 1]
    }
    // To check if the stack is empty
    isEmpty() {
        return this.items.length === 0
    }

    // To get the size of the stack

    size() {
        return this.items.length
    }

    // To print the stack
    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
stack.pop()
stack.print()
