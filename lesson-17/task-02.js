const person = {};
const customers = [];
const typedArray = new Int16Array([1, 2, 3]);

Object.defineProperty(Object.prototype, 'isArrayTyped', {
    value() {
        return !!this.byteLength;
    }
});


console.log(person.isArrayTyped()); // false
console.log(customers.isArrayTyped()); // false
console.log(typedArray.isArrayTyped()); // true
