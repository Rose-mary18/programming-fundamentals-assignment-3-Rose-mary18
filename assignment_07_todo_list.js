// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// Build a simple to-do list program that runs entirely in the console and
// allows the user to manage their tasks interactively using a menu.
//
const readlineSync = require("readline-sync");

// Function to add a task
function addTask(tasks) {
    const task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

// Function to view all tasks
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Function to delete a task
function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    viewTasks(tasks);

    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    const removedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${removedTask}" has been removed.`);
}

// Main function
function main() {
    let tasks = [];
    let choice;

    do {
        console.log("\n============================");
        console.log("     TO-DO LIST MENU");
        console.log("============================");
        console.log("1. Add task");
        console.log("2. View tasks");
        console.log("3. Delete task");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask(tasks);
                break;

            case 2:
                viewTasks(tasks);
                break;

            case 3:
                deleteTask(tasks);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid menu choice. Please try again.");
        }

    } while (choice !== 4);
}

// Run program
main();
