// Function to generate markdown for README

const generateReadMe = answers => {
  return `
  # ${answers.title}
  ![Github licence](http://img.shields.io/badge/license-${answers.license}-blue.svg)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.install}

  ## Usage
  ${answers.usage}

  ## License
  This project is license under ${answers.license}

  ## Contributing
  ${answers.contributors}
  
  ## Tests
  ${answers.test}

  ## Questions
  If you have any questions about this project, please contact me directly at ${answers.email}. You can view more of my projects at https://github.com/${answers.github}.
  
  `
}

//
module.exports = generateReadMe;