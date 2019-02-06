class MyArray {

    constructor() {
        // Datapoints
        this.lenght = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;

        return this.lenght;
    }

    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];   
        }

        delete this.data[this.lenght - 1];
        this.lenght--;
    }

}

const newArray = new MyArray();

console.log(newArray);