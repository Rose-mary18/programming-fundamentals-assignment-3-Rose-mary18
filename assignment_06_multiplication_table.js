// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
const readlineSync = require("readline-sync");

// Part A - Print a single multiplication table
function printTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Part B - Print multiplication tables from 1 to N
function printTablesUpToN(n) {
    for (let i = 1; i <= n; i++) {
        printTable(i);

        if (i < n) {
            console.log("---------------------------");
        }
    }
}

// Main function
function main() {
    // Part A
    const number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printTable(number);

    // Part B
    const n = readlineSync.questionInt("\nEnter N to print tables from 1 to N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    printTablesUpToN(n);
}

// Run program
main();


