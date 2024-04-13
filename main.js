#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print welcome message 
console.log(chalk.blue.bold(" \t \t  <<<===============================================================>>>"));
console.log("\t \t <<<==================================================================>>>");
console.log(chalk.magenta.bold.italic(" \t \t \t Welcome to CodeWithSaad - Updated Todo-List Application"));
console.log(chalk.green(" \t \t <<<<<================================================================>>>>>"));
console.log(chalk.blue(" \t \t <<<<<<<<<<<<<<<<<<<<<<<<<=========================>>>>>>>>>>>>>>>>>>>>>>>>"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                "name": "choice",
                "type": "list",
                "message": chalk.green("Select an option you want to do :"),
                "choices": ["Add Task", "Delete Task", "Update Task", "View Todo -List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo -List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//=========== Funtion to add new task to the List=========
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            "name": "task",
            "type": "input",
            "message": chalk.green("Enter your new task :"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task added successfully in Todo-List`);
};
//============== Funtion to view all Todo-List Tasks================
let viewTask = () => {
    console.log("\n  Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//============= Function to delete a task from the list==============
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            "name": "index",
            "type": "number",
            "message": "Enter the 'index no'. of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.red(`\n ${deletedTask} this task has been deleted successfully from your Todo-List`));
};
//============== Function to update a task in the list==========
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            "name": "index",
            "type": "number",
            "message": "Enter the 'index.no' of the task you want to update :",
        },
        {
            "name": "new_task",
            "type": "input",
            "message": chalk.green("Enter the new task name :"),
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk.green(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list check "View Todo-List]`));
};
main();
