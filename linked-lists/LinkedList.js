// 10 --> 5 --> 16

/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        // Check params
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode =  new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this;
    }

    remove(index) {
        // Check params
        if (index >= this.length) {
            return false;
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        this.length--;

        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    reverse() {
        if (!this.head.next) {
            return this;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        /*let iteratorNode = this.head;
        let currentNode = null;
        let prevNode = null;

        while (iteratorNode !== null) {
            currentNode = iteratorNode;
            iteratorNode = iteratorNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
        }

        this.head = this.tail;
        this.tail = this.head;*/
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
myLinkedList.reverse();

console.log(myLinkedList.printList());