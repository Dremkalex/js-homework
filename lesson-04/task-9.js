function arrayFill(value, arrayLength) {
    if(arguments.length !== 2) {
        throw new Error('Error: function should be invoked with 2 parameters')
    } else if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)) {
        throw new Error('Error: 1-st parameter is required and should be on of type: number, string, object or array')
    } else if(typeof arrayLength !== 'number') {
        throw new Error('Error: 2-nd parameter is required and it type should be a number')
    } else {
        let arr = [];
        for (let i = 0; i < arrayLength; i++) {
            arr.push(value);
        }
        return arr;
    }
}

console.log(arrayFill('💝', 3));
