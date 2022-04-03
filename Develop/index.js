// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is then name of your Project?",
        name: 'projectTitle',
    },

    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Please input the installation instructions',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Please input the usage information',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Please input the contribution guidelines',
        name: 'contributionGuidelines',
    },

    {
        type: 'input',
        message: 'Please input the test instructions',
        name: 'test',
    },

    {
        type: 'list',
        message: 'Please choose the license for your project',
        name: 'licence',
        choices: ['Mit License','GNU GPLv3', 'Apache', 'Cloud Native Computing Foundation', 'GNU', 'npm packages', 'OpenBSD', 'Rust', 'WordPress' ]
    },

    {
        type: 'input',
        message: 'Please enter your github username',
        name: 'userName'
    },

    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'

    }

];

inquirer
    .prompt(questions)
    .then ((response) => {
        console.log(response)
        writeToFile('README.md',response)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const template = `
# ${data.projectTitle}

## Description

    ${data.description}
    
## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation

    ${data.installation}
    
## Usage
    
    ${data.usage}

## Credits

    ${data.contributionGuidelines}
    
## License

    ${data.licence}
    
## Badges
    
    ![badmath](https://shields.io/badge/${data.licence}-blue)
    
## Tests

    ${data.test}
    `
    fs.appendFile(fileName, template, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
