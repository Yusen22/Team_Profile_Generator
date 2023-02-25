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

const team = [];

const emptyValidation = (value) => {
    if (value === "") {
        console.log("\nYou must enter a value")

    }

}

const promptManagerQuestions = () => 
inquirer
        .prompt([
    {
        type: "input",
        message: "Enter the name of the manager",
        name: "managerName",
        validate: (value) => {
            if (value === "") {
                console.log("\nYou must enter a value")
            }
            else {
                return true
            }
        }

    },
    {
        type: "input",
        message: "Enter the manager's employee ID",
        name: "managerID",
        validate: (value) => {
            if (value === "") {
                console.log("\nYou must enter a value")
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Enter the manager's email address",
        name: "managerEmail",
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
        message: "Enter the manager's office number",
        name: "managerOfficeNum",
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
    }
]).then((answers) => {

    const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);

    team.push(newManager)

    console.log(newManager);
    promptNextEmployee()
})



// Function to prompt engineer questions and push answer to team array
const promptEngineerQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the name of the engineer",
                name: "engName",
                
            },
            {
                type: "input",
                message: "Enter the engineer's ID number",
                name: "engID",

            },
            {
                type: "input",
                message: "Enter the engineer's email address",
                name: "engEmail",
            
            },
            {
                type: "input",
                message: "Enter the URL of the engineer's GitHub account",
                name: "engGithub",
                validate: (value) => {
                    if (value === "") {
                        console.log("\nPlease enter a value to continue")
                    } else {
                        return true
                    }
                }
            },
        ]).then(answers => {
            console.log(answers)

            const newEngineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGithub)

            team.push(newEngineer)

            console.log(newEngineer);
            promptNextEmployee()
        })
}

// Add intern questions 
const promptInternQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the name of the intern",
            name: "intName"
        },
        {
            type: "input",
            message: "Enter the intern's ID number",
            name: "intID"
        },
        {
            type: "input",
            message: "Enter the intern's email address",
            name: "intEmail"

        },
        {
            type: "input",
            message: "Enter the URL of the intern's GitHub account",
            name: "intSchool"
        }
    ]).then(answers => {
        console.log(answers)

        const newIntern = new Engineer(answers.intName, answers.intID, answers.intEmail, answers.intSchool)

        team.push(newIntern)

        console.log(newIntern);
        promptNextEmployee()
    })
}

const promptNextEmployee = () => {
    inquirer
        .prompt({
            type: "list",
            message: "Do you want to...",
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish building the team',
            ],
            name: 'teamOptions'
        })
        .then(response => {
            // console.log(response.teamOptions)
            if (response.teamOptions === 'Add an engineer') {
                promptEngineerQuestions()
            } else if (response.teamOptions === 'Add an intern') {
                promptInternQuestions()
            } else {
                buildPage()
            }
        })
}




// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("Your team has been generated! Look inside your current working directory."));

    console.log(fileName);
    console.log(data);
}


// function to initialize program

function init() {
    console.log("\n\nWelcome to the Team Profile Generator !\n\nLet's start to build your team...\n\nFirst up is the manager...\n\n");
    
    promptManagerQuestions()
        
}

// function call to initialize program
init();


// Function to build page from page-template after all employees are added
const buildPage = () => {
    render(team)
    writeToFile('index.html', )


}

module.exports = team

