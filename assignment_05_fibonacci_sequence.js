// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
const readlineSync = require("readline-sync");

// Part A - Print the first N Fibonacci terms
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be positive.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = [];

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            sequence.push(first);
        } else if (i === 2) {
            sequence.push(second);
        } else {
            let next = first + second;
            sequence.push(next);
            first = second;
            second = next;
        }
    }

    console.log("Fibonacci sequence: " + sequence.join(" "));
}

// Part B - Check if a number is a Fibonacci number
function checkFibonacci(number) {
    if (number < 0) {
        console.log(`${number} is NOT a Fibonacci number.`);
        return;
    }

    let first = 0;
    let second = 1;

    if (number === 0 || number === 1) {
        console.log(`${number} is a Fibonacci number.`);
        return;
    }

    while (second < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    if (second === number) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

// Main function
function main() {
    const n = readlineSync.questionInt("How many terms? ");

    printFibonacci(n);

    const number = readlineSync.questionInt("\nEnter a number to check: ");

    checkFibonacci(number);
}

// Run program
main();


