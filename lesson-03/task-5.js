function isPositive(num) {
    if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number')
    }
    return num > 0;
}

const arr = [1, 2, -4, 3, -9, -1, 7];
const newArr = [];

for (let i = 0; i < arr.length; i++){
    if (!isPositive(arr[i])) continue;
    newArr.push(arr[i]);
}