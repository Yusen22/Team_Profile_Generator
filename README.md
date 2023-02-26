# Engineering_Team_Profile_Generator

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
An application for generating a team profile page containng a work profile for each employee in an engineering team using a CLI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Licence](#licence)
- [Sources](#sources)

## Installation
 
Navigate to the root folder of the application entitled 'Team-Profile Generator' in the command line using the `cd` command.

Install `package.json` by typing:
```
npm init -y 

npm i inquirer@6.5.0 
```

The application is ready to use.

## Usage

Navigate to the `Team_Profile_Generator` directory in the terminal. 

Enter `npm index.js` in the command line to be prompted with the first question, and then enter answers for each of the four presented questions.

Now, select an option from the list to create an engineer or intern profile, or to build the page. When creating another profile, answer all presented questions to be presented with the options list again. 

The outputted `html` file will be generated in the `Team_Profile_Generator/output/` folder.


![Screenshot of application](../Team_Profile_Generator/assets/Screenshot_20230226_141533.png)



## Tests

Navigate to `Team_Profile_Generator/__tests__/` and type `npm i jest` in the command line. 

Naviage to the `package.json` file in the root directory and ensure `"scripts:"` contains `{"test": "jest" }`.

Now, navigate back to the `__tests__` folder in the terminal using the `cd` command, an type `npm test` to run tests on super-classes for employee, and extensions of it for manager, engineer and intern profiles. 

## Questions

Github: https://github.com/Yusen22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: elijahwilsher@gmail.com

Any questions on this project can be directed to the above email address or Github account.

## Sources

`{./src/page-template.js: Ln 1 - Ln 135}` - Source code provided by edX Front-End Bootcamp

`{./__tests__}` - Folder and test code provided by edX Front-End Bootcamp

`{index.js: Ln 111 - Ln 118}` - Code debugged with assitance from BCS Learning Assistant

`{index.js}` - Concept for function structure provided by Dan Mueller (edx Bootcamp Teacher)



## Licence

MIT
