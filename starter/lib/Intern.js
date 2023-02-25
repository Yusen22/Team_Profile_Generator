// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
 
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        console.log(this.constructor.name);
    }
    getSchool() {
        console.log(this.school)
    }
   
}

const int1 = new Intern("Kev", 1, 2, 'Compton')

eng1.getSchool()

module.exports = Intern