#!/usr/bin/env node
import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstNumber"},
    {message: "enter second number", type: "number", name: "secondNumber"},
    {message: "select one of the opprator to perform operation", 
    type: "list",
    name: "opprator",
    choices: ["addition", "substiction", "multiplication", "devide"],
} 
])
if(answer.opprator=== "addition"){
    console.log(answer. firstNumber + answer. secondNumber)
}
else if (answer.opprator=== "substiction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.opprator=== "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.opprator=== "devide"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("select valide number ")
 } 