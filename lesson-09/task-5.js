function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var runTimer;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }
        waterAmount = amount;
    };

    function onReady() {
        console.log('Coffee is ready');
    }

    this.setOnReady = function(cb) {
        onReady = cb;
    }
    
    this.run = function() {
        runTimer = setTimeout(function() {
            runTimer = null;
            onReady();
        }, getTimeToBoil());
    };

    this.isRunning = function() {
        return !!runTimer;
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('До: ' + coffeeMachine.isRunning());

coffeeMachine.run();

console.log('В процессе: ' + coffeeMachine.isRunning());

coffeeMachine.setOnReady(function() {
    console.log('После: ' + coffeeMachine.isRunning());
});