function logger() {
  let execData = [];

  function init(func, ...rest) {
    if (typeof func !== "function") {
      throw new TypeError(
        "1-st parameter is required and should be a function"
      );
    }
    const result = func(...rest) || void 0;
    const data = {
      name: func.name,
      in: [...rest],
      out: result
    };
    execData.push(data);
    return result;
  }
  
  function print() {
    console.log(execData);
  }

  return {
    init,
    print
  };
}

const f = n => n;
const sum = (a, b) => a + b;
const special = () => {};
const log = logger();
log.init(f, 1);
log.init(sum, 1, 2);
log.print();

const customLog = logger();
customLog.init(sum, 3, 4);
customLog.init(f, 9);
customLog.init(special);
customLog.print();
