#! /usr/bin/env node

import inquirer from "inquirer"



const randomNumber = Math.floor(Math.random()* 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message:  "Please guess a number between 1-6:",
    }
]);
if(answer.userGussedNumber === randomNumber){
    console.log("Congratulations you guessed aright number");
}
 else {
    console.log("You guessed a wrong number");
}
console.log(answer);