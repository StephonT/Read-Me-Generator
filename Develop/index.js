// Defining inquirer so questions can be prompt to user
const inquirer = require('inquirer');


// Defining fs so fs.writeFile can be used
const fs = require('fs');

// Used require so that generateReadMe function in generateMarkdown.js can be used in this module
const generateReadMe = require('./utils/generateMarkdown.js');

// Variable created to hold the generateReadMe function. Placed it in fs.writeFile as a parameter so we aren't using a function as a parameter.
const pageREADME = generateReadMe();


// Wrapped inquirer.prompt() in a function so that it can be invoked on demand within the flow of the application.
const promptUser = () => {
    return inquirer.prompt ([
       {

       } 
    ])
}







//function to create file
fs.writeFile('README.md', pageREADME , err => {
    if (err) throw new Error (err);

    console.log('README has been successfully created!');
});

