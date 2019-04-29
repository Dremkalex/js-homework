Function.prototype.delay = function (ms) {
    setTimeout(this, ms);
}

function f() {
    console.log('hello');
  }
f.delay(4000);

Function.prototype.delay = function (ms) {
    const func = this;
    return function () {
        const args = arguments;
        const ctx = this;
        setTimeout(() => func.apply(ctx, args), ms);
    }
}

function f2(a, b) {
    console.log(a + b);
}
f2.delay(8000)(1, 2);
