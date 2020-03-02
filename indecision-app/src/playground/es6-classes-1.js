 
 // Car
 // make
 // model
 // vin
 // getDescription 

class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi, I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation
//Override getGreeting
// 1. Hi, I am xxx. I'm visiting from xxx.
// 2. Hi, I am xxx.

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        return this.homeLocation ? `${super.getDescription()} I'm visiting from ${this.homeLocation}.`: super.getDescription();
    }
}

const me = new Traveler('lucas', 23, 'Taigu');
console.log(me.getGreeting());


const other = new Student();
console.log(other.hasMajor());