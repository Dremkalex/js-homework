function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    this.getPower = function() {
        console.log('power', power);
        return power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }
        waterAmount = amount;
    };
    
    this.getWaterAmount = function() {
        console.log("waterAmount", waterAmount);
        return waterAmount;
    };
}
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.getPower();