function f(num) {
    if(!arguments.length) {
        throw new Error('parameter does not exist');
    } else if(typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if(!Number.isInteger(num)) {
        throw new Error('parameter is not an integer number');
    } else if(num > 7 || num < 1) {
        throw new Error('parameter should be in the range of 1 to 7')
    } else {
        let result;
        switch(num){
            case 1: result = 'Воскресенье'; break;
            case 2: result = 'Понедельник'; break;
            case 3: result = 'Вторник'; break;
            case 4: result = 'Среда'; break;
            case 5: result = 'Четверг'; break;
            case 6: result = 'Пятница'; break;
            case 7: result = 'Суббота'; break;
            default: result = 'Выходной!!!'
        }
        return result;
    }
    
}