console.log(`Linked List`)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
list.prepend(10)
list.print()
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.print()
