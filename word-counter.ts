#! /usr/bin/env node

import inquirer from "inquirer";

const words = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words \n \n",
    }])

    const count = words.Sentence.trim().split(" ") // this method is for words counting
    
    const counts = words.Sentence.trim() // this method is for characters counting

    // console.log(count)

    console.log(`\nyour Words are ${count.length} & Characters are ${counts.length}. \n`);
    


