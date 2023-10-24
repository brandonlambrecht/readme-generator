const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');


// Ask user questions for Readme content
const questionArr = [
    {
        type: 'input ',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'usage',
        default: 'npm start',
        message: 'How would you use your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GPL', 'APACHE', 'BSD', 'NONE'],
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'install',
        default: 'npm i inquirer@8.2.4',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        default: 'npm test',
        message: 'What command should be run to run test?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does user need to know about contributing to repo?',
    },

];


// Prompt user with question array and create a readme.md file from terminal
const promptUser = async () => {
    try {

        const userResponseObj = await inquirer.prompt(questionArr);

        const readmeContent = generateMarkdown(userResponseObj);

        await fs.promises.writeFile('README.md', readmeContent);

        console.log('README created!');

    } catch (err) {
        console.log(err);
    }
};



// Initial message call once application is ran
function init() {
    console.log('Welcome to the README generator, please answer the following questions to create a professional README file')
    promptUser()

}

// Function call to initialize app
init();
