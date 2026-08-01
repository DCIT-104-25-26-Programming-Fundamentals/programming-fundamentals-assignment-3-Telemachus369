// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// TASK: Student Record Management System
// =============================================================================

const readlineSync = require('readline-sync');

// Function to calculate average score
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// Function to add a student
function addStudent(students) {
    const student = {};

    student.name = readlineSync.question("Student name: ");

    student.id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt(
        "How many scores? "
    );

    if (numberOfScores <= 0) {
        console.log("Error: Number of scores must be positive.");
        return;
    }

    student.scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat(
            `Enter score ${i + 1}: `
        );

        student.scores.push(score);
    }

    students.push(student);

    console.log(
        `Student "${student.name}" added successfully.`
    );
}

// Function to display all students
function displayStudents(students) {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records");
    console.log("------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(
            `Average: ${calculateAverage(student.scores).toFixed(2)}`
        );

        console.log("------------------------------");
    }
}

// Function to calculate average for a specific student
function findStudentAverage(students) {
    const id = readlineSync.questionInt(
        "Enter student ID: "
    );

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                `${students[i].name}'s average score: ${
                    calculateAverage(students[i].scores).toFixed(2)
                }`
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Main Program
function main() {
    let students = [];
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayStudents(students);
                break;

            case 3:
                findStudentAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log(
                    "Error: Invalid choice. Please select 1-4."
                );
        }

    } while (choice !== 4);
}

main();