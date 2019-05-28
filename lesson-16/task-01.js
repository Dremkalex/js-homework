"use strict"

function f (start, end, delay) {
    const args = [...arguments];
    if (args.some(arg => typeof arg !== 'number')) {
        throw new Error ('parameters type should be a number')
    } else if (args.length !== 3) {
        throw new Error ('function should be invoked with 3 required parameters');
    };

    const count = Math.abs(start - end) + 1;
    const increment = start < end;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            console.log(start);
            increment ? start ++ : start --;
        }, i*delay);
    }
}
f(5, 1, 2000);
