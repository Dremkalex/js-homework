function bind (func, context, ...params){
    return function () {
        return func.apply(context, params);
    }
}
    const obj = {
        getName: function(message, srn) {
            return `${message}: ${this.name} ${srn}`;
        }
    };
    
    const getName = obj.getName;
    
    const f = bind(getName, {name: 'Pitter'}, 'My name', 'Pen');
    console.log(f()); // My name: Pitter





