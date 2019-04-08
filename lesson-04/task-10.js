const arr = [5,4,3,2,1];

function reverse(array) {
    if(!Array.isArray(array)) {
        throw new Error('1-st parametr is required and should be an array')
    } else if (array.length === 0){
        throw new Error('array can not be empty')
    } else {
        const arr = [];
        for(let i = array.length-1; i >= 0; i--){
            arr.push(array[i]);
        }
        return arr;
    }
}

console.log(reverse(arr));
