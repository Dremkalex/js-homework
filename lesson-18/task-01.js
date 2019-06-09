const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

const schema = {
  "properties": {
      "name": { "type": "string" },
      "age": { "type": "number" },
      "country": { "type": "string" },
      "salary": { "type": "number" }
    },
  "type": "object",
  "required": [
      "name",
      "country",
      "salary",
      "age"
    ],
  "additionalProperties": false
};

const schemaForUpdate = {
    "properties": {
        "name": { "type": "string" },
        "age": { "type": "number" },
        "country": { "type": "string" },
        "salary": { "type": "number" }
      },
    "type": "object",
    "minProperties": 1,
    "additionalProperties": false
}

const isValidate = ajv.compile(schema);
const isValidateNewData = ajv.compile(schemaForUpdate);


class DB {
    constructor(){
        this._db = new Map;
        this.key = DB.genId();
    }

    static genId () {
        let id = 0;
        return function() {
            return id++;
        }
    }

    create(entity) {
        if (!isValidate(entity)) {
            throw new Error(`The object ${JSON.stringify(entity)} doesn't valid: ${ajv.errorsText(isValidate.errors)}`);
        }
        const key = this.key().toString();
        this._db.set(key, entity);
        return key;
    }

    read(id) {
        if (arguments.length === 0) {
            throw new Error("The parameter 'ID' is required and should be a string!");
        } else if (typeof id !== 'string') {
            throw new Error("The parameter 'ID' should be a string!");
        }
        if (!this._db.has(id)) {
            return null;
        }
        return { id, ...this._db.get(id)};
    }

    readAll() {
        if (arguments.length !== 0) {
            throw new Error("The method 'readAll' should be invoked without parameters!");
        }
        return [...this._db.values()];
    }

    update(id, newData) {
        const args = [...arguments];
        if (args.length !== 2) {
            throw new Error("The method 'update' should be invoked with 2 required parameters!");
        } else if (typeof args[0] !== 'string') {
            throw new Error("The parameter 'ID' is required and should be a string!");
        } else if (!this._db.has(id)) {
            throw new Error(`The object with id: ${id} does not exist in database!`);
        } else if (!isValidateNewData(newData)) {
            throw new Error(`The data for updating ${JSON.stringify(newData)} does not valid: ${ajv.errorsText(isValidateNewData.errors)}!`);
        }

        const oldData = this._db.get(id);
        const updatedValue = { ...oldData, ...newData} ;
        this._db.set(id, updatedValue);
    }

    delete(id) {
        if (arguments.length === 0 || typeof id !== 'string') {
            throw new Error("The parameter 'ID' is required and should be a string!");
        } else if (!this._db.has(id)) {
            throw new Error(`The data with id=${id} doesn't exist in the DB!`);
        }
        this._db.delete(id);
        return true;
    }
}
const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person2 = {
    name: 'Mike', // обязательное поле с типом string
    age: 28, // обязательное поле с типом number
    country: 'uk', // обязательное поле с типом string
    salary: 800 // обязательное поле с типом number
};

// Creating DB:
const id = db.create(person); //id
console.log("---> id Person:", id);
const id2 = db.create(person2); //id
console.log("---> id2 Person2:", id2);

console.log('---> initial db:', db)

// Reading customer
const customer = db.read(id2);
console.log("--->customer2:", customer); //object with id and user data

//Reading all users
console.log("--->readAll:", db.readAll()); //array of all users 

//Updating user info
console.log(db.update(id2, { age: 32, salary: 1000 })); //true
console.log('---> result db after updating:', db);

//Deleting user
console.log(db.delete(id)); //true

//Result DB
console.log('---> result db after deleting:', db);