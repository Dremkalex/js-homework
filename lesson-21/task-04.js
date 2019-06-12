const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class Countries {
    constructor(url) {
        if(typeof url !== 'string') {
            throw new Error('The parameter "url" should be a string!')
        }
        this.url = url;
    }

    send(size) {
        if (typeof size !== 'number') {
            throw new Error ('The parameter should be a number!')
        }

        const fullUrl = `${this.url}?size=${size}`;

        const promise = new Promise((resolve, reject) => {
            get(fullUrl, (error, { status }, body) => {
                if (status !== 200) {
                    reject(`We have error, status code: ${status}`);
                } else {
                    const { data } = JSON.parse(body);
                    resolve(data);
                }
            });
        })
        return promise;
    }
};

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();