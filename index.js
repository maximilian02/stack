class Stack {
  constructor() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  add(item) {
    this.items.push(item)
  }

  remove() {
    if(this.size() > 0) {
      this.items.pop()
    }
  }

  peek() {
    return this.items[this.size() - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }
}

const stack = new Stack()

console.log('isEmpty', stack.isEmpty())
stack.add(1)
console.log('peek', stack.peek())
stack.add(2)
stack.add(3)
console.log('peek', stack.peek())
stack.remove()
console.log('items', stack.isEmpty())
console.log('items', stack.items)
stack.clear()
console.log('items', stack.isEmpty())

