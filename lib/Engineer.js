// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
 
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        console.log(this.constructor.name);
        return this.constructor.name
    }
    getGithub() {
        console.log(this.github)
        return this.github
    }
   
}



module.exports = Engineer
