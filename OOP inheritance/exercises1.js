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


// console.log(car2.status());
// car2.accelrate(15);
// console.log(car2.status());
// car2.break(135);
// console.log(car2.status());


// console.log(car2.accelrate(15));
// console.log(car2.status());


// console.log(car3.status());
// console.log(car4.status());










// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!



class Tv{
    constructor(brand, channel=1, volume = 50){
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    status(){
        return this.brand+" "+this.channel+" "+this.volume;
    }

    increaseVolume(volume){
        if(this.volume > 1 && this.volume <= 100){
            this.volume += volume;
        }
        return this.volume;
    }


    decreaseVolume(volume){
        if(this.volume > 1 && this.volume <= 100){
            this.volume -= volume;
        }
        if(this.volume < 0){
            this.volume = 0;
        }
        return this.volume;
    }


    setChannel(newChannel){
        if(newChannel > 1 && newChannel < 50){
            this.channel = newChannel;
        }
        if(this.channel > 50){
            this.channel = this.channel;
        }
    }

    resetTv(){
        this.channel=1;
        this.volume=50;
        return this;
    }
}

var tv = new Tv('Tesla',5,33);
tv.setChannel(56);
console.log(tv.status());

