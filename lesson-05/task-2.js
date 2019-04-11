const mix = (...functions) => {
    for(const f of functions) {
        if(typeof f !== 'function') {
            throw new Error('type of arguments should be a function');
        }
    }
    let result = functions[0]();
    for (const f of functions) {
        result = f(result);
    }
    return result;
}

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
})) // 2);