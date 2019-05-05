function extractCurrencyValue(str) {
    if(typeof str !== 'string') {
        throw new TypeError('parametr of function is required and should be a string')
    }
    return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120'));