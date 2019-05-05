'use strict'

const person = {};

Object.defineProperties(person, {
    rate: {
      writable: true
    },

    salary: {
      get: function() {
        const today = new Date();
        return this.rate !== void 0 ? this.rate * today.getDate() : 0;
      },
      enumerable: true
    }
});

person.rate = 30;
console.log(person.rate);
console.log(person.salary);