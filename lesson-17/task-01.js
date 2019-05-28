const person = {};
const customers = [];
const typedArray = new Int8Array([1, 2, 3]);

delete Array.isArray;
delete Array.prototype.isArray;
console.log('Array.isArray', typeof Array.isArray);
console.log('Array.prototype.isArray', typeof Array.prototype.isArray);

Object.defineProperty(Object.prototype, 'isArray', {
    value() {
        return Object.prototype.toString.call(this) === '[object Array]';
    }
});

const str = 'string';
const num = 7;

console.log(num.isArray());
console.log(str.isArray());
console.log(person.isArray());
console.log(customers.isArray());
console.log(typedArray.isArray());
console.log(Object.hasOwnProperty(isArray));