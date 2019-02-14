
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
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
        const follower = leader.next;

        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
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
        const follower = unwantedNode.next;

        leader.next = follower;
        follower.prev = leader;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);

console.log(myLinkedList.printList());