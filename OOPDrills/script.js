let person1 = {
    name:"Carmindy",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person2 = {
    name:"Joey",
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person3 = {
    name:"Chelsea",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person4 = {
    name:"Roxy",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
let person5 = {
    name:"Joe",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Person(name,city,age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.speak = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} and live in ${this.city}`)
}

let persona1 = new Person("Roxy","Houston", "7");
let persona2 = new Person("Carmindy","Houston", "10");
let persona3 = new Person("Joe","Houston", "37");
let persona4 = new Person("Chelsea","Houston", "30");
let persona5 = new Person("Joey","Houston", "3");

persona1.speak();
persona2.speak();
persona3.speak();
persona4.speak();
persona5.speak();

class Friends {
    constructor(name,city,age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    speak() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} and live in ${this.city}`)
    }
}

friend1 = new Friends("Roxy","Houston", "7");
friend2 = new Friends("Carmindy","Houston", "10");

friend1.speak();
friend2.speak();

class Vehicle {
    constructor(wheels,mfc){
        this.wheels = wheels;
        this.mfc = mfc;
    }
    aboutVehicle(){
        console.log(`Type: ${this.constructor.name} Manufacturer: ${this.mfc} Wheels: ${this.wheels}`);
    }
}


class Truck extends Vehicle {
    constructor(wheels,mfc,doors){
        super(wheels,mfc);
        this.hasTruckBed = true;
        this.doors = doors;

    }
    aboutVehicle(){
        console.log(`Type: ${this.constructor.name} Manufacturer: ${this.mfc} Wheels: ${this.wheels} Truck Bed: ${this.hasTruckBed}`);
    }
}

class Sedan extends Vehicle {
    constructor(wheels,mfc,doors,size,mpg){
        super(wheels,mfc);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;

    }
    aboutVehicle(){
        console.log(`Type: ${this.constructor.name} Manufacturer: ${this.mfc} Wheels: ${this.wheels} Size: ${this.size} MPG: ${this.mpg}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(wheels,mfc){
        super(wheels,mfc);
        this.hasDoors = false;
        this.hasHandlebars = true;
    }
    aboutVehicle(){
        console.log(`Type: ${this.constructor.name} Manufacturer: ${this.mfc} Wheels: ${this.wheels} HandleBars: ${this.hasHandlebars}`);
    }
}


let truck = new Truck(4,"Chevy",4,true);
let sedan = new Sedan(4,"Nissan",4,"Medium",25);
let motorcycle = new Motorcycle(2,"Harley Davidson");

sedan.aboutVehicle();
motorcycle.aboutVehicle();
truck.aboutVehicle();
