const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")

inquirer
  .prompt([ 
      {
          name: ("name"),
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
  .then(data => {
      console.log(data.name)  
      let employeeCard = fs.readFile("../10-team-profile-generator/templates/Employee.html", 'utf8', (err, data) => {
          if (err) throw err;
            console.log(data)
      }
      )

  });

