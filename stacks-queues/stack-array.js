class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);

        return this;
    }

    pop() {
        this.array.pop();

        return this;
    }
}
  
const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
myStack.pop();
console.log(myStack);