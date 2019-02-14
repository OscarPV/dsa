const { performance } = require('perf_hooks');

const names = new Array(100000).fill('test');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log('La función tardó ' + (t1 - t0) + ' milisegundos');
}

findNemo(names);