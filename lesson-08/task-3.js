function f() {
  let prevNum;
  let currNum = null;
  let fibNum = 0;

  function print() {
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
    console.log(fibNum);
    return fibNum;
  }

  function reset() {
    prevNum = null;
    currNum = null;
    fibNum = 0;
    console.log("reset");
  }

  return {
    print,
    reset
  };
}

const action = f();
action.print();
action.print();
action.print();
action.print();
action.reset();
action.print();
action.print();

const action2 = f();
action2.print();
