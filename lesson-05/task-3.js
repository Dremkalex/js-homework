const mix = (...functions) => {
    for(const f of functions) {
        if(typeof f !== 'function') {
            throw new Error('type of arguments should be a function');
        }
    }
    let errors = [];
    let result = functions[0]();

    for (let i = 1; i < functions.length; i++) {
        try {
            result = functions[i](result);
        } catch(e) {
            const { name, message, stack } = e;
            errors.push({name, message, callbackIndex: i, stack});
        }
    }
   
    return {
        errors,
        result
    }
}


console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}, (prev) => {
    throw new TypeError('Type is wrong');
},(prev) => {
    return prev + 3;
}
))