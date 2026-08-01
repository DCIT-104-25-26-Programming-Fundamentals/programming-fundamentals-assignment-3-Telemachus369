// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix
function readMatrix(rows, cols) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        let row;

        while (true) {
            row = readlineSync
                .question(`Enter row ${i + 1}: `)
                .split(' ')
                .map(Number);

            if (row.length === cols) {
                break;
            }

            console.log(`Error: Please enter exactly ${cols} values.`);
        }

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowText = "";

        for (let j = 0; j < matrix[i].length; j++) {
            rowText += matrix[i][j].toString().padStart(6);
        }

        console.log(rowText);
    }
}

// Part A: Transpose a matrix
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < cols; j++) {
        transpose[j] = [];

        for (let i = 0; i < rows; i++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

// Part B: Add two matrices
function addMatrices(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Part C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            let sum = 0;

            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            result[i][j] = sum;
        }
    }

    return result;
}

// Main Program
function main() {
    console.log("1. Transpose Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");

    const choice = readlineSync.questionInt("Enter your choice: ");

    if (choice === 1) {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        const matrix = readMatrix(rows, cols);

        console.log("\nOriginal Matrix:");
        displayMatrix(matrix);

        console.log("\nTransposed Matrix:");
        displayMatrix(transposeMatrix(matrix));
    }
    else if (choice === 2) {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        console.log("\nEnter Matrix A");
        const matrixA = readMatrix(rows, cols);

        console.log("\nEnter Matrix B");
        const matrixB = readMatrix(rows, cols);

        console.log("\nResult:");
        displayMatrix(addMatrices(matrixA, matrixB));
    }
    else if (choice === 3) {
        const rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
        const colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

        console.log("\nEnter Matrix A");
        const matrixA = readMatrix(rowsA, colsA);

        const rowsB = readlineSync.questionInt("\nEnter rows of Matrix B: ");
        const colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

        if (colsA !== rowsB) {
            console.log(
                "Error: Number of columns in Matrix A must equal number of rows in Matrix B."
            );
            return;
        }

        console.log("\nEnter Matrix B");
        const matrixB = readMatrix(rowsB, colsB);

        console.log("\nResult:");
        displayMatrix(multiplyMatrices(matrixA, matrixB));
    }
    else {
        console.log("Error: Invalid choice.");
    }
}

main();