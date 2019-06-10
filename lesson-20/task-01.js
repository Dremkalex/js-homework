class Customers {
    constructor() {
        this._store = []
    }
    
    add(entity) {
        const properties = Object.keys(entity);
        if(arguments.length !== 1) {
            throw new Error('The method should be invoked with 1 parameter!')
        } else if (typeof entity !== 'object') {
            throw new Error ('The parameter should be an object!')
        } else if (!entity.hasOwnProperty('name')) {
            throw new Error ('Object does not valid: property "name" is required!')
        } else if (properties.length === 2 && properties.some(item => item !== 'name' && item !== 'verified')) {
            throw new Error('Object does not valid: property should be one of "name" or "verified"')
        }


        this._store.push(entity);
    }

    [ Symbol.iterator ]() {
        let i = 0;
        const iterableEntities = this._store.filter(entity => entity.hasOwnProperty('verified') && entity.verified === true);

        return {
            next: () => {
                const done = i >= iterableEntities.length;
                const value = !done ? iterableEntities[ i++ ] : undefined;

                return {
                    value,
                    done
                } 
            },
        };
    }
}

const customers = new Customers();

customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: false});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

console.log('customers', customers);

for (const customer of customers) {
    console.log(customer);
}
