class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if(course > 5 || course < 1) {
            return `${this.getFullName()} does not a student :)`
        }
        return currentYear - this.year;
    }
}

var student = new Student('Sawa', 'Mareb', 2016);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());