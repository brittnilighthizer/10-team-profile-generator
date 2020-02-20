const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

inquirer
  .prompt([ 
      {
          name: ("Name"),
          type: ("input"),
          message: ("What is the name of the Employee?")
      },
      {
          name: ("id"),
          type: ("input"),
          message: ("What is the Employee's ID")
      },
      {
          name: ("email"),
          type: ("input"),
          message: ("What is the Employee's email")
      },
      {
          name: ("title"),
          type: ("list"),
          choices: [Manager, Employee, Intern, Engineer]
      }

  ])
  .then(answers => {
      console.log(answers.Name)
      if 

  });

