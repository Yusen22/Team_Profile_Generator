const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    {
        type: "input",
        message: "Enter a title for the project",
        name: "title",
        validate: (value) => {
            if (value === "") {
                console.log("\nYou must have a project title (min. 3 characters)")
            }
            else if (value.length < 3) {
                console.log("\nPlease enter a minimum of 3 characters for your project title.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Provide a brief description of the project",
        name: "description",
        validate: (value) => {
            if (value === "") {
                console.log("\nYou must have a project description (min. 10 characters)")
            }
            else if (value.length < 10) {
                console.log("\nPlease enter a minimum of 10 characters for your description.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Instruct the user how to install the application",
        name: "install",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 10 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 10) {
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "confirm",
        message: "Do you want to add an screenshot of the application to the description?",
        name: "screenshot",
    },
    {
        type: "input",
        message: "Please enter the filepath of the screenshot you want to include (ensure the filepath is correct before entering)",
        name: "shotpath",
        when: (answers) => {
            if (answers.screenshot === true) {
                return true;
            }
        },
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value to continue")
            } else {
                return true
            }
        }
    },

    {
        type: "input",
        message: "Instruct the user on how to use the application.",
        name: "usage",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 10 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 10) {
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "List contributors to the project.",
        name: "contributors",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 3 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 3) {
                console.log("\nPlease enter a minimum of 3 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }

    },
    {
        type: "input",
        message: "Instruct the user on how to test the application.",
        name: "tests",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 10 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 10) {
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 3 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 3) {
                console.log("\nPlease enter a minimum of 3 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (value) => {
            if (value === "") {
                console.log("\nPlease enter a value (min. 3 characters) or 'N/A' to continue")
            }
            else if (value.toUpperCase() === 'N/A') {
                return true
            }
            else if (value.length < 3) {
                console.log("\nPlease enter a minimum of 3 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "list",
        message: "Select a licence for this project.",
        choices: [
            'Apache license 2.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'MIT',
            'The Unlicense',
        ],
        name: 'licence'
    },

]




// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("README successfully written to the current working directory!"));

    console.log(fileName);
    console.log(data);
}


// function to initialize program

function init() {
    console.log("Welcome to the professional README generator!\n\nPlease complete the questions below to generate your README.\n\nNOTE: Enter 'N/A' on a question if the section is not relevant to your project.\n")
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', generateMarkdown(answers))
        })
}

// function call to initialize program
init();

module.exports = questions

