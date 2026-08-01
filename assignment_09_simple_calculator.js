// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require('readline-sync');

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    return a / b;
}

// Function for modulus
function modulus(a, b) {
    return a % b;
}

// Function for exponentiation
function exponent(a, b) {
    return a ** b;
}

// Main Program
function main() {
    let choice;

    do {
        console.log("\n============================");
        console.log("       SIMPLE CALCULATOR");
        console.log("============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        choice = readlineSync.questionInt(
            "Select an operation (1-7): "
        );

        if (choice >= 1 && choice <= 6) {

            const num1 = readlineSync.questionFloat(
                "Enter first number: "
            );

            const num2 = readlineSync.questionFloat(
                "Enter second number: "
            );

            let result;

            switch (choice) {

                case 1:
                    result = add(num1, num2);
                    console.log(
                        `Result: ${num1} + ${num2} = ${result.toFixed(2)}`
                    );
                    break;

                case 2:
                    result = subtract(num1, num2);
                    console.log(
                        `Result: ${num1} - ${num2} = ${result.toFixed(2)}`
                    );
                    break;

                case 3:
                    result = multiply(num1, num2);
                    console.log(
                        `Result: ${num1} * ${num2} = ${result.toFixed(2)}`
                    );
                    break;

                case 4:
                    if (num2 === 0) {
                        console.log(
                            "Error: Cannot divide by zero."
                        );
                    } else {
                        result = divide(num1, num2);

                        console.log(
                            `Result: ${num1} / ${num2} = ${result.toFixed(2)}`
                        );
                    }
                    break;

                case 5:
                    if (num2 === 0) {
                        console.log(
                            "Error: Cannot perform modulus by zero."
                        );
                    } else {
                        result = modulus(num1, num2);

                        console.log(
                            `Result: ${num1} % ${num2} = ${result.toFixed(2)}`
                        );
                    }
                    break;

                case 6:
                    result = exponent(num1, num2);

                    console.log(
                        `Result: ${num1} ** ${num2} = ${result.toFixed(2)}`
                    );
                    break;
            }

        } else if (choice === 7) {

            console.log("Goodbye!");

        } else {

            console.log(
                "Error: Invalid choice. Please select 1-7."
            );

        }

    } while (choice !== 7);
}

main();