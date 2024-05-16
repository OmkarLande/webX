// Types in Typescript

//Static - Built in types
let a: number = 10;
let b: string = "Hello";
let c: boolean = true;
let d: void = undefined;
let e: null = null;
let un: undefined = undefined;
let any: any = "Hello";

//static - User defined types
let array: number[] = [1, 2, 3];
class Person {
    name: string;
    age: number;
}
let student: [string, number] = ["Omkar", 20];
interface PersonInterface {
    name: string;
    age: number;
}
let person: PersonInterface = { name: "Omkar", age: 20 };
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;
function add(a: number, b: number): number {   
    return a + b;
}
