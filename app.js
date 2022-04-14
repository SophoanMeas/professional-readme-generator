const generateMarkDown = require('./utils/generateMarkDown')

const cl = require('cli-color')
const inquirer = require('inquirer')
const fs = require('fs')
const emailValidation = require('nodejs-email-validation')
const { resolve } = require('path')


function error(string) {
    return console.log(cl.redBright.bold(string))
}

const promptQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'repoTitle',
            message: `Enter the application ${cl.magentaBright.bold('repository name.')}`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    error('Please enter a repo name!')
                    return false;
                }
            }
        },
        // {
        //     type: 'type',
        //     name: 'project-title',
        //     message: `Enter a  ${cl.cyanBright.bold('project title.')}`,
        //     validate: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter a project title!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: `Enter the ${cl.greenBright.bold('project description.')}`,
        //     validate: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter a description!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'install',
        //     message: `Enter the ${cl.greenBright.bold('installation instruction.')}`,
        //     vlaidate: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please the installation instruction (if any)!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: `Enter the ${cl.greenBright.bold('usage information.')}`,
        //     validate: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter the usage information!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'guideline',
        //     message: `Enter the ${cl.greenBright.bold('contribution guideline.')}`,
        //     validae: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter the contribution guideline!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'test-instruction',
        //     message: `Enter the ${cl.greenBright.bold('test instructions.')}`,
        //     validae: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter test instructions')
        //         }
        //     }
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: `Select a ${cl.whiteBright.bold('license from the list.')}`,
        //     choices: ['Google', 'Microsoft Azura', 'Amazon AWS', 'MIT xPro', 'edX']
        // },
        // {
        //     type: 'input',
        //     name: 'github-user',
        //     message: `Enter your ${cl.yellowBright.bold('GitHub username.')}`,
        //     validate: input => {
        //         if (input) {
        //             return true;
        //         } else {
        //             error('Please enter your GitHub username!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: `Enter your ${cl.yellowBright.bold('email address.')}`,
        //     validate: input => {
        //         if (emailValidation.validate(input)) {
        //             return true;
        //         } else {
        //             error(' Please a valid email address!')
        //         }
        //     }
        // },
    ]);
}

function init() {
    promptQuestions()
        .then(function(data) {
            writeFile('./utils/README.md', generateMarkDown(data))
                .then(data => console.log(data.message))
        })
}

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: `${fileName} file was Created!`
            });
        });
    });
}

init();