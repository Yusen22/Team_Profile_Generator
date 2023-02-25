// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(this.name);
    }
    getID() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.email);
    }
    getRole() {
        console.log(this.constructor.name);
    }

}

const employee1 = new Employee('Jake', 2, 2)




module.exports = Employee