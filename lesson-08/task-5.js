function logger() {
  let execData = [];

  function init(func, ...rest) {
    if (typeof func !== "function") {
      throw new TypeError(
        "1-st parameter is required and should be a function"
      );
    }

    let data = {
      name: func.name,
      in: [...rest]
    };

    try {
      const result = func(...rest) || void 0;
      data = {
        ...data,
        out: result
      };
      execData.push(data);
      return result;
    } catch (e) {
      const error = {
        name: e.name,
        message: e.message,
        stack: e.stack
      };
      data = {
        ...data,
        out: void 0,
        error
      };
      execData.push(data);
    }
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
const special = () => {
  throw new Error("Content is wrong");
};
const log = logger();
log.init(f, 1);
log.init(special);
log.init(sum, 1, 2);
log.print();
