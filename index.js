const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/team.js');

const teamMembers = [];
function getStarted() {

        function createManager() {
            console.log('Get started building your team!');
            inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is your manager's name?",
                        name: 'managerName',
                        validate: answer => {
                            if (answer !== '') {
                            return true;
                            }
                            return "Please enter a name for your manager.";
                        }
                    },
                    {
                        type: 'input',
                        message: "What is your manager's ID?",
                        name: 'managerId',
                        validate: answer => {
                            const valid = answer.match(
                                /^[0-9]\d{3}/ 
                            );
                            if (valid) {
                                return true;
                            }
                            return "Please enter a 3-digit ID number."
                        }
                    },
                    {
                        type: 'input',
                        message: "What is your manager's email address?",
                        name: 'managerEmail',
                        validate: function (answer) {
                            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                            if (valid) {
                                return true;
                            } else {
                            return "Please enter a valid email address."
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: "What is your manager's phone number?",
                        name: 'officeNumber'
                    }
                ])
                .then(answers => {
                    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                    console.log(manager);
                    teamMembers.push(manager);
                    addTeamMembers();
                });
        };
        function addTeamMembers() {
            inquirer.prompt([
                {
                    type:'list',
                    message: 'What type of team member would you like to add?',
                    name: 'employeeSelect',
                    choices: [
                        'Engineer',
                        'Intern',
                        'I don’t have any more members to add.'
                    ]
                }
            ])
            .then(answer => {
                switch(answer.employeeSelect) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
        };
        function addEngineer() {
            inquirer
            .prompt([{
                    type: 'input',
                    message: "What is your engineer's name?",
                    name: 'engineerName',
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return 'Please enter a name for your engineer.'
                    }
                },
                {
                    type: 'input',
                    message: "What is your engineer's ID?",
                    name: 'engineerId',
                    validate: answer => {
                        const valid = answer.match(
                            /^[0-9]\d{3}/ 
                        );
                        if (valid) {
                            return true;
                        }
                        return "Please enter a 3-digit ID number."
                    }
                },
                {
                    type: 'input',
                    message: "What is your engineer's email address?",
                    name: 'engineerEmail',
                    validate: function (answer) {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                        if (valid) {
                            return true;
                        } else {
                        return "Please enter a valid email address."
                        }
                    }
                },
                {
                    type: 'input',
                    message: "What is your engineer's Github username?",
                    name: 'engineerGithub',
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return 'Github username requires at least one character.'
                    }
                }
            ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                console.log(engineer);
                teamMembers.push(engineer);
                addTeamMembers();
            });
        };
        function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is your intern's name?",
                    name: 'internName',
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return 'Please enter a name for your intern.'
                    }
                },
                {
                    type: 'input',
                    message: "What is your intern's ID?",
                    name: 'internID',
                    validate: answer => {
                        const valid = answer.match(
                            /^[0-9]\d{3}/ 
                        );
                        if (valid) {
                            return true;
                        }
                        return "Please enter a 3-digit ID number."
                    }
                },
                {
                    type: 'input',
                    message: 'What is your intern’s email?',
                    name: 'internEmail',
                    validate: function (answer) {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                        if (valid) {
                            return true;
                        } else {
                        return "Please enter a valid email address."
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'Where does your intern attent school?',
                    name: 'internSchool',
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        }
                        return 'School requires at least one character.'
                    }
                }
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                console.log(intern);
                teamMembers.push(intern);
                addTeamMembers();
            });
        };
   
        function buildTeam() {
            if (!fs.existsSync(OUTPUT_DIR)) {
              fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        };

        createManager();
}

getStarted();