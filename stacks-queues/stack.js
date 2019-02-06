class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const holdingPoint = this.top;
            this.top = newNode;
            this.top.next = holdingPoint;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        this.top = this.top.next;
        this.length--;

        return this;
    }
    
    isEmpty() {
        return this.bottom === null ? true : false;
    }
}
  
const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
myStack.pop();
console.log(myStack);