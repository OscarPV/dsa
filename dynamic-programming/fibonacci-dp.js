// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(2^n)
function fibonacciRecursive(n) {

    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

let calc = 0;

// O(n)
function fibonacciMaster() {
    let cache = {};

    return function fib(n) {
        calc++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n) {
    let answer = [0, 1];

    for (let i = 2; i < n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }

    return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('Fibonacci number: ', fasterFib(60));
console.log('Calculations: ', calc);