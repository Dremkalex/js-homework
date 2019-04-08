const arr = [1,2,3];

function forEach(arr, cb) {
    if(arguments.length === 0) {
        throw new Error('function should be invoked with 2 parameters')
    } else if(!Array.isArray(arr)) {
        throw new Error('1-st parameter is required and it type should be an array')
    } else if(typeof cb !== 'function') {
        throw new Error('2-nd parameter is required and it type should be a function')
    } else {
        for (let i = 0; i < arr.length; i++) {
            cb(arr[i], i, arr);
        }        
    }
}

function cb(item, index, array) {
    console.log(`item: ${item}, index: ${index} in arr: [${array}]`)
}

forEach(arr, cb);