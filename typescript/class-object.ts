// class 
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Siddhya", 21);

// Access Modifier
class MyClass {
    public publicProperty: string;
    private privateProperty: string;
    protected protectedProperty: string;

    constructor() {
        this.publicProperty = "Public Property";
        this.privateProperty = "Private Property";
        this.protectedProperty = "Protected Property";
    }
}

const obj = new MyClass();
console.log(obj.publicProperty); // Accessible
// console.log(obj.privateProperty); // Error: 'privateProperty' is private.
// console.log(obj.protectedProperty); // Error: 'protectedProperty' is protected

// Inheritance
class Vehicle {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    drive() {
        console.log(`Driving a ${this.brand}`);
    }
}

class Car extends Vehicle {
    model: string;
    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }
    drive() {
        console.log(`Driving a ${this.brand} ${this.model}`);
    }
}

class SportsCar extends Car {
    topSpeed: number;
    constructor(brand: string, model: string, topSpeed: number) {
        super(brand, model);
        this.topSpeed = topSpeed;
    }
    drive() {
        console.log(`Driving a ${this.brand} ${this.model} at a top speed of ${this.topSpeed} km/hr`);
    }
}