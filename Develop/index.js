// Defining inquirer so questions can be prompt to user
const inquirer = require('inquirer');
 

// Defining fs so fs.writeFile can be used
const fs = require('fs');

// Used require so that generateReadMe function in generateMarkdown.js can be used in this module
const generateReadMe = require('./utils/generateMarkdown.js');



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


//function to create file
const writeFile = answers => {
    fs.writeFile('README.md', answers, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 








