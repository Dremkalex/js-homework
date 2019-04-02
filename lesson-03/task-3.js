function f(a,b,c) {
    for(const item of arguments) {
        if(typeof item !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }
    return (a - b)/c;
}