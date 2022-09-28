// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
//WHEN I enter my project title
 //THEN this is displayed as the title of the README
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },

// GitHub username 
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username(required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('This is required!');
                return false;
            }
        }
    },
// email address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address(required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('This is required!');
                return false;
            }
        }
    },
//WHEN I enter a description, 
    //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, 
    //and Tests
    {
        type: 'input',
        name: 'why',
        message: 'Please provide a description of your project (required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }
    },

    //installation instructions
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions. (required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    //usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information. (required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('This is required!');
                return false;
            }
        }
    },
    //contribution guidelines
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide contribution guidelines. (required)',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('This is required!');
                return false;
            }
        }
    },

    //and test instructions
    {
        type: 'input',
        name: 'test',
        message: 'Please provide information on how to test the application. (required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('This is required!');
                return false;
            }
        }
    },
    // license 
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated")
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
 };

// Function call to initialize app
init();
