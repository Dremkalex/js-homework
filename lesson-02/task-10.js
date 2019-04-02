// 1st option
var firstArray = [6,5,4,3,2,1]; // [1,2,3,4,5,6]
var arrLength = firstArray.length;
var buffer;

for(var i = 0; i < arrLength; i++) {
    for(var j = 0; j < arrLength-1; j++) {
        if(firstArray[j] > firstArray[j+1]) {
            buffer = firstArray[j];
            firstArray[j] = firstArray[j+1];
            firstArray[j+1] = buffer;
        }
    }
}
console.log('firstArray', firstArray);

// 2nd option (без лишних итераций цикла)
var secondArray = [6,5,4,3,2,1]; // [1,2,3,4,5,6]
var flag = false;
var tmp;
do {
    flag=true;
    for (var i = 0; i < secondArray.length-1; i++){
        if (secondArray[i] > secondArray[i+1]){
            tmp = secondArray[i+1];
            secondArray[i+1] = secondArray[i];
            secondArray[i] = tmp;
            flag = false;
        }
    }
}
while (!flag);

console.log('secondArray', secondArray);