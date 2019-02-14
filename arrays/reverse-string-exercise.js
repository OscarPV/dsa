/*
* Create a function that reverses a string:
* 'Hi my name is Oscar' should be: 'racsO si eman ym iH'
*/

function reverse(str) {
    // Check input.
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'No can do!';
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join();
}

const reverse3 = str => [...str].reverse().join('');