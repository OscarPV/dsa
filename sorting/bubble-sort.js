const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let first = array[j];
            let second =  array[j + 1];

            if (first > second) {
                array[j] = second;
                array[j + 1] = first;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);