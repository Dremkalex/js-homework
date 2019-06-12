function isCustomerVerified (object) {
    if (typeof object !== 'object') {
        throw new Error ('The parameter should be an object!')
    }

    const promise = new Promise((resolve, reject) => {
        if(object.hasOwnProperty("verified") && object.verified) {
            resolve(true);
        } else {
            reject('Customer is not verified');
        }
    });
    return promise;
};

const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified