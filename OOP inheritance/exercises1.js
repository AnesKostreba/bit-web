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
            this.motion += speed;
    }


    break(down){
        this.motion -= down;
        if(this.motion < 0){
            this.motion = 0;
        }
    }

    breakRightNow(){
        if(this.motion > 0){
            this.motion = 0;
        }
        return "Car is stopped "+this.motion+"km/h";
    }
}

var car1 = new Car('Mercedes','C220',105);
var car2 = new Car('Skoda','Fabia',110);
var car3 = new Car('Passat','B6',143);
var car4 = new Car('Skoda','Octavia',113);

// console.log(car1.status());

// car1.breakRightNow();
// console.log(car1.checkMotion());


console.log(car2.status());
car2.accelrate(15);
console.log(car2.status());
car2.break(135);
console.log(car2.status());


// console.log(car2.accelrate(15));
// console.log(car2.status());


// console.log(car3.status());
// console.log(car4.status());
