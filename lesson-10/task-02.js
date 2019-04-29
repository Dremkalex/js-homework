function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, this._getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();