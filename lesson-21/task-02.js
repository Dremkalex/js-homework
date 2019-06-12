function getCustomers (customers, countries) {
    if(!Array.isArray(customers) || !Array.isArray(countries)) {
        throw new Error("Parameters should be an Array!")
    }

    const promise = new Promise((resolve, reject) => {
        const verifiedCustomers = customers.filter(({ verified }) => verified);

        const result = verifiedCustomers.reduce((acc, customer) => {
            const countryInfo = countries.find(country => country.id === customer.id);

            if (!countryInfo) {
                reject(`We don't have information about country for this customer: ${customer.name}`);
            } else {
                acc.push({...customer, ...countryInfo})
            }

            return acc;
        }, []);

        resolve(result);
    });
    return promise;
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    },
    {
        id: 'A3',
        name: 'Dima',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    },
    {
        id: 'A3',
        country: 'ukraine'
    }
];


getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
