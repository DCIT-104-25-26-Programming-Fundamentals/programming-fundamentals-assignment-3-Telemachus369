// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// TASK: Array Statistics Calculator
// =============================================================================

const readlineSync = require("readline-sync");

// Function to calculate sum
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate average
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Function to find maximum value
function findMaximum(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Function to find minimum value
function findMinimum(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

// Main function
function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(
            readlineSync.questionFloat(`Enter number ${i + 1}: `)
        );
    }

    console.log("\nResults:");
    console.log("Sum:    ", calculateSum(numbers));
    console.log("Average:", calculateAverage(numbers));
    console.log("Maximum:", findMaximum(numbers));
    console.log("Minimum:", findMinimum(numbers));
}

main();