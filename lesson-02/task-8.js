var arr = [1,2,3,4,6];
var sum = 0;
var arrLength = arr.length;

// 1st way
for (var i = 0; i < arrLength; i++) {
    sum = (arr[i] > 3 && arr[i] % 2 === 0 ) ? sum + arr[i] : sum;
}

// 2nd way
sum = 0;
for (var item of arr) {
    if (item < 3 || item % 2 !== 0 ) continue;
    sum += item;
}