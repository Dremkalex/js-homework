var arr = [1, 2, 3, -5, -2, 1, -4];
var sum = 0;

// 1st way
for(var i = 0; i < arr.length; i++) {
    sum = arr[i] > 0 ? sum + arr[i] : sum;
}
console.log('sum =', sum);

// 2nd way
sum = 0;
for(var item of arr) {
    if(item < 0) continue;
    sum += item;
}
console.log('sum =', sum);