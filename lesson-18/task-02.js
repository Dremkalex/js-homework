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

const queryParam = {
    "properties": {
        "name": { "type": "string" },
        "country": { "type": "string" },
        "age": {
            "properties": {
                "min": { "type": "number"},
                "max": { "type": "number"}
            },
            "minProperties": 1,
            "additionalProperties": false
        },
        "salary": {
            "properties": {
                "min": { "type": "number"},
                "max": { "type": "number"}
            },
            "minProperties": 1,
            "additionalProperties": false
        },
      },
    "type": "object",
    "minProperties": 1,
    "additionalProperties": false
}

const isValidate = ajv.compile(schema);
const isValidateNewData = ajv.compile(schemaForUpdate);
const isValidateQueryParam =  ajv.compile(queryParam);

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

    find(query) {
        if (arguments.length !== 1 || typeof query !== 'object') {
            throw new Error("The method 'update' should be invoked with 1 required parameter type 'object'!")
        } else if (!isValidateQueryParam(query)) {
            throw new Error(`The data for searching ${JSON.stringify(query)} does not valid: ${ajv.errorsText(isValidateQueryParam.errors)}`)
        }


        let result = [];
        const { name, country, age, salary } = query;

        this._db.forEach((user, id) => {
            let flagName = !name;
            let flagCountry = !country;
            let flagAge = !age;
            let flagSalary = !salary;

            if (name && user.name === name) {
                flagName = true;
            }

            if (country && user.country === country) {
                flagCountry = true;
            }

            if (age) {
                const { min = 0, max = Infinity } = age;
                if ( user.age >= min && user.age <= max) {
                    flagAge = true;
                }
            }

            if (salary) {
                const { min = 0, max = Infinity } = salary;
                if ( user.salary >= min && user.salary <= max) {
                    flagSalary = true;
                }
            }

            if(flagName && flagCountry && flagAge && flagSalary) {
                result.push({id, ...user})
            }

        })

        return result;
    }
}
const db = new DB();

const person = {
    name: 'Vlad', // обязательное поле с типом string
    age: 38, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 5000 // обязательное поле с типом number
};

const person2 = {
    name: 'Mike', // обязательное поле с типом string
    age: 23, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 800 // обязательное поле с типом number
};

const person3 = {
    name: 'Alex', // обязательное поле с типом string
    age: 37, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 2000 // обязательное поле с типом number
};

// Creating DB:
db.create(person);
db.create(person2);
db.create(person3);

// Searching data:
const queryResult = db.find({
            country: "ua",
            age: {
                min: 25,
                max: 45
            }
        }); 

//Result
console.log('---> result', queryResult);