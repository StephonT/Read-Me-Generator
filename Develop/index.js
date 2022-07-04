// Defining inquirer so questions can be prompt to user
const inquirer = require('inquirer');
 

// Defining fs so fs.writeFile can be used
// const fs = require('fs');

// Used require so that generateReadMe function in generateMarkdown.js can be used in this module
// const generateReadMe = require('./utils/generateMarkdown.js');

// Variable created to hold the generateReadMe function. Placed it in fs.writeFile as a parameter so we aren't using a function as a parameter.
// const pageREADME = generateReadMe();


// Wrapped inquirer.prompt() in a function so that it can be invoked on demand within the flow of the application.
const promptUser = () => {
     return inquirer.prompt ([
       {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            };
          }
       }, 
       {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
       },
       {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false; 
                }
            } 
       },
       {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
       },
       {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false; 
                }
            }
       },
       {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project!');
                    return false; 
                }
            }
    },
    {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false; 
                }
            }
    },
    {
            type: 'confirm',
            name: 'confirmCredit',
            message: 'Would you like to give credit to collaborators or list references?',
            default: false
    },
    {
            type: 'input',
            name: 'credit',
            message: 'List collaborators or references:',
            when: ({ confirmCredit }) => {
                if (confirmCredit) {
                    return true;
                } else {
                    return false;
                }
            }
    },
    {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?',
            default: 'npm test'
    },
    {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
    }


    ]);
};


//function to create file
// fs.writeFile('README.md', pageREADME , err => {
//     if (err) throw new Error (err);

//     console.log('README has been successfully created!');
// });



// function call to initialize program
promptUser()
.then(answers => {
    return generateReadMe(answers);
})
// using data to display on page
.then(answers => {
    return writeFile(answers);
})
// //catching errors
.catch(err => {
    console.log(err);
})









