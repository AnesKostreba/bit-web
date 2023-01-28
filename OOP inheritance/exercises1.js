// 1. 
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!


class Car{
    constructor(brand, model, motion){
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }
    status(){
        return this.brand + " " + this.model + " " + this.checkMotion() +" "+ this.motion+"km/h";
    }


    checkMotion(){
        if(this.motion > 0){
            return 'Car is moving';
        }else{
            return 'Car is parked';
        }
    }

    accelrate(speed){
        if(speed > 0){
            var newSpeed = this.motion + speed;
            return newSpeed;
        }
    }

    break(down){
        var newSpeed = 0;
        if(down > 0){
            newSpeed = this.motion - down;
        }
        if(newSpeed < 0){
            newSpeed = 0;
        }
        return newSpeed;

    }

    breakRightNow(){
        if(this.motion > 0){
            this.motion = 0;
        }
        return "Car is stopped "+this.motion+"km/h";
    }
}

var novi = new Car('Mercedes','C220',105);
console.log(novi.checkMotion());
console.log(novi.accelrate(15));
console.log(novi.break(5));
console.log(novi.status());
console.log(novi.breakRightNow());