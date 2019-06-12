const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

function send (url) {
    const promise = new Promise ((resolve, reject) => {
        get(url, (error, { status }, body) => {
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

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });