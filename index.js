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
        when:(inputgithubUsername)=> inputgithubUsername.role === 'Engineer',
        validate: inputOfficeNumber => {
            if (inputOfficeNumber) {
                return true;
            } else {
                console.log("Enter office numer of manager to proceed!!");
                return false;
            }     
        }
    },
]