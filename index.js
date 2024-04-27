#! /usr/bin/env node 
import inquirer from "inquirer";
let userId = "usman";
let myPin = 1234;
let myBalance = 15000;
// input section from user
const userInput = await inquirer.prompt([
    {
        message: "Enter user id: ",
        type: "string",
        name: "userId",
    },
    {
        message: "Enter user pin: ",
        type: "number",
        name: "userPin",
    },
]);
// main function to take operation type and perform operation on it
let ATM = async () => {
    const operation = await inquirer.prompt([
        {
            message: "Select transaction type: ",
            type: "list",
            name: "selectedOperation",
            choices: ["Deposit", "Withdraw", "Check Balance"],
        },
    ]);
    switch (operation.selectedOperation) {
        case "Deposit": // deposit operation
            const deposit = await inquirer.prompt([
                {
                    message: "Enter amount to add in account: ",
                    type: "number",
                    name: "depositAmount",
                },
            ]);
            myBalance += deposit.depositAmount;
            break;
        case "Withdraw": // withdraw operation
            const withdraw = await inquirer.prompt([
                {
                    message: "Enter amount to withdraw from account: ",
                    type: "number",
                    name: "withdrawAmount",
                },
            ]);
            if (withdraw.withdrawAmount <= myBalance)
                myBalance -= withdraw.withdrawAmount;
            else
                console.log("Your balance is insufficient");
            break;
        case "Check Balance":
            console.log(`Your current balance is = ${myBalance}`);
            break;
    }
    const exit = await inquirer.prompt([
        {
            message: "Do you want to exit?",
            type: "list",
            name: "operation",
            choices: ["Yes", "No"],
        },
    ]);
    if (exit.operation == "Yes") {
        return;
    }
    ATM();
};
//validating username and pin
if (userInput.userId == userId && userInput.userPin == myPin) {
    ATM();
}
else {
    console.log("Invalid crediential");
}
