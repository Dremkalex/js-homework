function f() {
    let sum = 0;
    for(const item of arguments) {
        if(typeof item !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
        sum += item;
    }
    return sum;
}
