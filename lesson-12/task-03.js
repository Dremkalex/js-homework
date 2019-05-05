function truncate(str, maxlength) {
    if(arguments.length === 0) {
        throw new TypeError('function should be invoked with 2 required parameters')
    } else if(typeof str !== 'string'){
        throw new TypeError('1st parametr is required and should be a string')
    } else if(typeof maxlength !== 'number') {
        throw new TypeError('2nd parametr is required and should be a number')
    } else if(str.length <= maxlength) {
        return str;
    } else {
        return str.slice(0, maxlength-3).concat('...');
    }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));