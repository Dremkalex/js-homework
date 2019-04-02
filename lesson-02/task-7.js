var arr = [1,2,3,4];
var arrLength = arr.length;
var sum = 0;

// 1st way
for (var i = 0; i < arrLength; i++) {
    sum = arr[i] % 2 === 0 ? sum + arr[i] : sum;
}

// 2nd way
sum = 0;
for (var i = 0; i < arrLength; i++) {
    if (arr[i] % 2 !== 0) {
        continue;
    }
    sum = sum + arr[i];
}

// 3rd way
sum = 0;
for(var item of arr) {
    if(item % 2 !== 0) continue;
    sum += item;
}