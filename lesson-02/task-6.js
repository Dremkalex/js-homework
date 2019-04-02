var arr = [1,2,3,4];
var sum = 0;

// 1st way
var arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
    sum = sum + arr[i];
}

// 2nd way
sum = 0;
for(var item of arr) {
    sum = sum + item;
}
