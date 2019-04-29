class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

var worker = new Worker('Ivan', 'Ivanoff', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

var developer = new Worker('Sawa', 'Mareb', 1000, 20);
var manager = new Worker('Nadin', 'Pliska', 800, 20);

console.log(`Total salary: ${developer.getSalary() + manager.getSalary()}`);