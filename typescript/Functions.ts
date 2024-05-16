// Function overloading in TypeScript

function add(a: number, b: number): number 
function add(a:string, b:string): string 

function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2));
console.log(add("Hello", "World"));


//function declaration
function sub(a: number, b: number): number {
    return a - b;
}

//function expression
let multiply = function(a: number, b: number): number {
    return a * b;
}
multiply(2, 3);

//Arrow function
let divide = (a: number, b: number): number => {
    return a / b;
}

// anonymous function
let greet = function() {
    console.log("Hello World");
}

// optional and default parameter
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//rest parameter
function message(fewWords: string, ...restOfWords: string[]) {
    return fewWords + " " + restOfWords.join(" ");
}
console.log(message("Siddhya", "Topper", "Party de!", "ya veli chi party de bc!"));
// Siddhya Topper Party de! ya veli chi party de bc!