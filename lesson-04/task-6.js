const arr = [1,2,3];
const acc = 0;

function reduceRight(arr, cb, acc) {
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
            index = arr.length-1;
        } else {
            accumulator = arr[arr.length-1];
            index = arr.length-2
        }
        for (let i = index; i >=0; i--) {
            accumulator = cb(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
}

function cb(initial, item, index, array) {
    return initial + item;
}

console.log(reduceRight(arr, cb, acc));