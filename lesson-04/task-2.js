const arr = [1,2,3];

function filter(arr, cb) {
    if(arguments.length === 0) {
        throw new Error('function should be invoked with 2 parameters')
    } else if(!Array.isArray(arr)) {
        throw new Error('1-st parameter is required and it type should be an array')
    } else if(typeof cb !== 'function') {
        throw new Error('2-nd parameter is required and it type should be a function')
    } else {
        let newArrray = [];
        let result;
        for (let i = 0; i < arr.length; i++) {
            result = cb(arr[i], i, arr);
            if(!result) continue;
            newArrray.push(arr[i]);
        }
        return newArrray;
    }
}

function cb(item, index, array) {
    return item !== 3;
}

console.log(filter(arr, cb));