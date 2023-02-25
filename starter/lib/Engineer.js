// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
 
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = `https://github.com/${github}`
    }
    getRole() {
        console.log(this.constructor.name);
    }
    getGithub() {
        console.log(this.github)
    }
   
}

const eng1 = new Engineer("Kev", 1, 2, 'bigKev')

eng1.getRole()

module.exports = Engineer
