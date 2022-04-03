// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is then name of your Project?",
    name: "projectTitle",
  },

  {
    type: "input",
    message: "Please describe your project",
    name: "description",
  },

  {
    type: "input",
    message: "Please input the installation instructions",
    name: "installation",
  },

  {
    type: "input",
    message: "Please input the usage information",
    name: "usage",
  },

  {
    type: "input",
    message: "Please input contributions",
    name: "contributionGuidelines",
  },

  {
    type: "input",
    message: "Please input the test instructions",
    name: "test",
  },

  {
    type: "list",
    message: "Please choose the license for your project",
    name: "licence",
    choices: [
      "Mit-License",
      "GNU-GPLv3",
      "Apache",
      "Cloud_Native_Computing_Foundation",
      "GNU",
      "npm-packages",
      "OpenBSD",
      "Rust",
      "WordPress",
    ],
  },

  {
    type: "input",
    message: "Please enter your github username",
    name: "userName",
  },

  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },

  {
    type: "input",
    message: "Please enter the name for your README file",
    name: "name",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const template = `


# ${data.projectTitle}      ![badmath](https://shields.io/badge/${data.licence}-blue)

## Description

${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation

${data.installation}
    
## Usage
    
${data.usage}

## Contributions

${data.contributionGuidelines}
    
## License

Notice: The current repository is covered under the ${data.licence} license. Please work accordinly to the guidlines set by it.

        
## Tests

${data.test}

## Questions

My Github username is ${data.userName}. The link to my profile: https://github.com/${data.userName}.

If there is anything you would like to ask me - either about myself or the code - please email my at ${data.email}.


    `;
  fs.writeFile(fileName, template, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile(`${response.name}.md`, response);
      });
}

// Function call to initialize app
init();
