class Person {
    firstName : string;
    lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " +  this.lastName;
    }
    greet() {
        return "Hello " + this.getFullName() + "!";
    }
}

class Mechanic extends Person {
    constructor(firstName, lastName){
        super(firstName, lastName);
    }
    sayGoodbye(){
        return "Goodbye Mechanic " + super.getFullName();
    }
}

var aPerson = new Person("John", "Smith");
console.log(aPerson.getFullName());

var aMechanic = new Mechanic("Sam", "Smith");
console.log(aMechanic.sayGoodbye());

var anotherMechanic : Person  = new Mechanic("Tim", "Jones");
console.log(anotherMechanic.greet());