const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

function init() {
    renderHTML();
    addEmployee();
}

init();

const questions = [
    {
        type:'list',
        name:'role',
        message: 'What is the employee role?',
        choices:['Manager', 'Engineer', 'Intern']
    },
    {
        type:'input',
        name:'name',
        message:"What is the employee's name?",
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log("Enter name of employee to proceed!!");
                return false;
            }          
        }
    },
    {
        type:'input',
        name:'id',
        message:"What is the employee's ID #?",
        validate: inputId => {
            if (inputId) {
                return true;
            } else {
                console.log("Enter ID # of employee to proceed!!");
                return false;
            }        
        }
    },
    {
        type:'input',
        name:'email',
        message:"What is the employee's email address?",
        validate: inputEmail => {
            if (inputEmail.includes('@')) {
                return true;
            } else {
                console.log("Enter email of employee to proceed!!");
                return false;
            }     
        }
    },
    {
        type:'input',
        name:'officeNumber',
        message:"What is the manager's office number?",
        when:(inputOfficeNumber)=> inputOfficeNumber.role === 'Manager',
        validate: inputOfficeNumber => {
            if (inputOfficeNumber) {
                return true;
            } else {
                console.log("Enter office numer of manager to proceed!!");
                return false;
            }     
        }
    },
    {
        type:'input',
        name:'github',
        message:"What is the employee's github username?",
        when:(inputGithubUsername)=> inputGithubUsername.role === 'Engineer',
        validate: inputGithubUsername=> {
            if (inputGithubUsername) {
                return true;
            } else {
                console.log("Enter github username of engineer to proceed!!");
                return false;
            }     
        }
    },
    {
        type:'input',
        name:'school',
        message:"What is the intern's school name?",
        when:(inputSchoolName)=> inputSchoolName.role === 'Intern',
        validate: inputSchoolName=> {
            if (inputSchoolName) {
                return true;
            } else {
                console.log("Enter school name of intern to proceed!!");
                return false;
            }     
        }
    },
    {
        type:'confirm',
        name:'add new employee',
        message: "Add another employee?",
        default: false
    }
];

const addEmployee =() =>{
    return inquirer.prompt(questions)
    .then(employeeProfile=> {
        let {role, name, id, email github, school, officeNumber} =employeeProfile;
        let employee;
        if (role === 'Manager'){
            employee = new Manager(name, id, email, officeNumber);
        }
        if (role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
        }
        if (role === 'Intern'){
            employee = new Intern(name, id, email, school);
        }
        teamArray.push(employee);
    })
};
