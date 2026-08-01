// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// TASK: Multiplication Table Generator
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Generate a single multiplication table
function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// Part B: Generate multiplication tables from 1 to N
function printTablesUpToN(n) {
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    for (let number = 1; number <= n; number++) {
        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        console.log("---------------------------");
    }
}

// Main Program
function main() {
    console.log("============================");
    console.log(" MULTIPLICATION TABLE MENU");
    console.log("============================");
    console.log("1. Single Multiplication Table");
    console.log("2. Tables from 1 to N");

    const choice = readlineSync.questionInt(
        "Enter your choice (1-2): "
    );

    if (choice === 1) {
        const number = readlineSync.questionInt(
            "Enter a number: "
        );

        if (number <= 0) {
            console.log("Error: Number must be a positive integer.");
            return;
        }

        printTable(number);
    }
    else if (choice === 2) {
        const n = readlineSync.questionInt(
            "Enter N: "
        );

        printTablesUpToN(n);
    }
    else {
        console.log("Error: Invalid choice.");
    }
}

main();