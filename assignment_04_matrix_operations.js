// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function inputMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        let values = row.split(" ").map(Number);

        while (values.length !== cols) {
            console.log(`Error: Please enter exactly ${cols} numbers.`);
            row = readlineSync.question(`Enter row ${i + 1}: `);
            values = row.split(" ").map(Number);
        }

        matrix.push(values);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

// Part A - Transpose a matrix
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let i = 0; i < cols; i++) {
        transpose[i] = [];

        for (let j = 0; j < rows; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }

    return transpose;
}

// Part B - Add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Part C - Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Main function
function main() {
    let choice = 0;

    do {
        console.log("\n============================");
        console.log("      MATRIX OPERATIONS");
        console.log("============================");
        console.log("1. Transpose Matrix");
        console.log("2. Add Two Matrices");
        console.log("3. Multiply Two Matrices");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Select an option (1-4): ");

        if (choice === 1) {
            let rows = readlineSync.questionInt("Enter number of rows: ");
            let cols = readlineSync.questionInt("Enter number of columns: ");

            let matrix = inputMatrix(rows, cols);

            console.log("\nOriginal Matrix:");
            displayMatrix(matrix);

            console.log("\nTransposed Matrix:");
            displayMatrix(transposeMatrix(matrix));
        }

        else if (choice === 2) {
            let rows = readlineSync.questionInt("Enter number of rows: ");
            let cols = readlineSync.questionInt("Enter number of columns: ");

            console.log("\nEnter Matrix A:");
            let matrixA = inputMatrix(rows, cols);

            console.log("\nEnter Matrix B:");
            let matrixB = inputMatrix(rows, cols);

            console.log("\nSum of Matrices:");
            displayMatrix(addMatrices(matrixA, matrixB));
        }

        else if (choice === 3) {
            let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
            let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

            console.log("\nEnter Matrix A:");
            let matrixA = inputMatrix(rowsA, colsA);

            let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
            let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

            if (colsA !== rowsB) {
                console.log("Error: Columns of A must equal rows of B.");
            } else {
                console.log("\nEnter Matrix B:");
                let matrixB = inputMatrix(rowsB, colsB);

                console.log("\nProduct of Matrices:");
                displayMatrix(multiplyMatrices(matrixA, matrixB));
            }
        }

        else if (choice === 4) {
            console.log("Goodbye!");
        }

        else {
            console.log("Error: Invalid choice.");
        }

    } while (choice !== 4);
}

// Run program
main();

