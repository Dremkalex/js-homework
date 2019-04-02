// 1st way
function getDivisors(num) {
    if(!arguments.length) {
        throw new Error('parameter does not exist');
    } else if(typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if(num === 0){
        throw new Error('parameter can\'t be a 0');
    } else if(!Number.isInteger(num)) {
        throw new Error('parameter is not an integer number');
    } else {
        let arr = [];
        for(let i = 1; i <= num; i++){
            if(num % i !== 0) continue;
            arr.push(i);
        }
        return arr;
    }
}
console.log(getDivisors(12));

// 2nd way
/*(попробовала оптимизировать: на 1 и на само себя делятся все числа,
а также нет смысла проверять деление на больше чем половину себя)*/
function getDivisors2(num) {
    if(!arguments.length) {
        throw new Error('parameter does not exist');
    } else if(typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if(num === 0){
        throw new Error('parameter can\'t be a 0');
    } else if(!Number.isInteger(num)) {
        throw new Error('parameter is not an integer number');
    } else {
        let arr = [1];
        for(let i = 2; i <= num/2; i++){
            if(num % i !== 0) continue;
            arr.push(i);
        }
        arr.push(num);
        return arr;
    }
}
console.log(getDivisors2(12));
