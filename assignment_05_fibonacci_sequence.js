// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// TASK: Fibonacci Sequence Generator
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Print the first N Fibonacci terms
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = "";

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            sequence += first;
        } else if (i === 2) {
            sequence += " " + second;
        } else {
            const next = first + second;
            sequence += " " + next;

            first = second;
            second = next;
        }
    }

    console.log("Fibonacci sequence:", sequence);
}

// Part B: Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first < number) {
        const next = first + second;
        first = second;
        second = next;
    }

    return first === number;
}

// Main Program
function main() {
    const n = readlineSync.questionInt("How many terms? ");

    printFibonacci(n);

    const number = readlineSync.questionInt(
        "\nEnter a number to check: "
    );

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

main();