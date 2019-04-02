// 1st way with shift
function f(array) {
    if(!Array.isArray(array)) {
        throw new Error('parameter type should be an array')
    } else if(!array.length) {
        throw new Error('parameter can\'t be an empty');
    } else {
        console.log(array.shift());
        if(array.length >= 1) {
            f(array);
        }
    }
};

f([1, 2, 3]);

// 2nd way with splice
const arr2 = [1, 2, 3];
function f2(array) {
    if(!Array.isArray(array)) {
        throw new Error('parameter type should be an array')
    } else if(!array.length) {
        throw new Error('parameter can\'t be an empty');
    } else {
        console.log(array[0]);
        array.splice(0,1);
        if(array.length >= 1) {
            f(array);
        }
    }
};

f2([1, 2, 3]);
