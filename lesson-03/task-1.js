function f(value) {
    if(typeof value !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    return value ** 3;
}