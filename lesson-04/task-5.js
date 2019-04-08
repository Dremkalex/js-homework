const arr = [1,2,3];
const acc = 0;

function reduce(arr, cb, acc) {
    if(arguments.length === 0 || (arguments.length > 3)) {
        throw new Error('function should be invoked with at least 2 and max 3 parameters')
    } else if(!Array.isArray(arr)) {
        throw new Error('1-st parameter is required and it type should be an array')
    } else if(typeof cb !== 'function') {
        throw new Error('2-nd parameter is required and it type should be a function')
    } else if(typeof acc !== 'string' && typeof acc !== 'number' && arguments.length === 3) {
        throw new Error('3-rd parameter type should be a string or a number')
    } else {
        let accumulator, index;
        if(arguments.length === 3){
            accumulator = acc;
            index = 0;
        } else {
            accumulator = arr[0];
            index = 1
        }
        for (let i = index; i < arr.length; i++) {
            accumulator = cb(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
}

function cb(initial, item, index, array) {
    return initial + item;
}

console.log(reduce(arr, cb, acc));