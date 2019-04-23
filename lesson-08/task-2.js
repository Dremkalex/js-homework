function f() {
  let prevNum;
  let currNum = null;
  let fibNum = 0;

  return function() {
    if (currNum === null) {
      currNum = 0;
    } else if (currNum === 0) {
      prevNum = 0;
      currNum = 1;
      fibNum = prevNum + currNum;
    } else {
      fibNum = prevNum + currNum;
      prevNum = currNum;
      currNum = fibNum;
    }
    return fibNum;
  };
}
const action = f();
console.log(action());
console.log(action());
console.log(action());
console.log(action());
console.log(action());
console.log(action());
console.log(action());
