function compose (...functions) {
    for(const func of functions) {
        if(typeof func !== 'function') {
            throw new Error('types of arguments should be a function');
        }
    }
    return function (initialValue) {
        return functions.reduceRight((current, next) => next(current), initialValue);
    }
}

console.log(compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a')); // 'abc'

