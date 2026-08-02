// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
const readlineSync = require("readline-sync");

// Function to calculate average score
function calculateAverage(student) {
    if (student.scores.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];
    }

    return sum / student.scores.length;
}

// Function to add a student
function addStudent(students) {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// Function to display all students
function displayStudents(students) {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    console.log("\n================ STUDENT RECORDS ================");
    console.log("Name\t\tID\t\tScores\t\tAverage");
    console.log("------------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log(
            `${student.name}\t${student.id}\t${student.scores.join(", ")}\t${calculateAverage(student).toFixed(2)}`
        );
    }
}

// Function to find and display a student's average
function findAverage(students) {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                `${students[i].name}'s average score: ${calculateAverage(students[i]).toFixed(2)}`
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Main function
function main() {
    let students = [];
    let choice;

    do {
        console.log("\n================================");
        console.log(" STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayStudents(students);
                break;

            case 3:
                findAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid menu choice.");
        }

    } while (choice !== 4);
}

// Run program
main();


