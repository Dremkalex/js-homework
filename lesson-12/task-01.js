function upperCaseFirst(str) {
    if(typeof str !== 'string') {
        throw new TypeError('parametr of function is required and should be a string');
    }
    return str.charAt(0).toUpperCase().concat(str.slice(1));
}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));
