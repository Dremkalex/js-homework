function isEven(num) {
    if(!arguments.length) {
        throw new Error('parameter does not exist');
    } else if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number')
    } else {
        return num % 2 === 0;
    }
}