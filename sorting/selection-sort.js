const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        let indexLowest = i;
        let temp = array[i];

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[indexLowest]) {
                indexLowest = j;
            }
        }

        array[i] = array[indexLowest];
        array[indexLowest] = temp;
    }
}

selectionSort(numbers);
console.log(numbers);