function checkSpam(str, example) {
    if(typeof str !== 'string' && typeof example !== 'string') {
        throw new TypeError('function should be invoke with 2 string parameters')
    }
    return str.toLowerCase().includes(example.toLowerCase());
}

console.log(checkSpam('pitterXXX@gmail.com', '5'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));