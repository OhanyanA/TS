// //TS
// //Variables
// let firstName :string= "Ann"
// let lastName: string= "Smith"
// let bornDate: number= 2000
// let age:number= 22
// let student:boolean= false
//
// console.log(firstName + lastName + " was born in"
//     + bornDate + " so " + firstName + " is " +
//     age + " years old" )
//
// //"Any" type
// let something:any;
// something= "hello";
// something= 12;
// something = true;
// something= null
// something= undefined
// something.toUpperCase()
// something= [1, 2, 3]
// something = {
//     name:"Ann",
//     age: 12
// }
// something.forEach()
//
//
// //Delayed Initialization
// const movies = [" One", "Two", "Three"]
// let foundMovie:any
// for (let movie of movies) {
//     if (movie === "One") {
//         foundMovie= "One"
//     }
// }
//  foundMovie();
// foundMovie= 1;
// foundMovie.toUpperCase()
//
// // Function
//
// function multiplication (num){
//   num = 12
//     return num*num.as.result
// }
// multiplication(144);
//
// function greet(person:string){
//     return `Hi there ${person}`
// }
//
// const add = (x: number, y: number): number => {
//     return x+y
// }
//
// function rando(num: number){
//     if(Math.random() < 0.5){
//         return num.toString()
//     }
// }
//
// const colors = ["red", "orange", "yellow"];
// colors.map(color=> {
//     return color.toUpperCase()
// })
//
//
// //Void
// function printTwice(msg: string): void{
//     console.log(msg);
//     console.log(msg);
//     // can't return anything
// }
//
// function makeError(msg:string): never {
//     throw new Error(msg);
// }
//
// function gameLoop(): never {
//     while (true) {
//         console.log("Game loop running")
//     }
// }
//
// //Object types
// function printName(person:{ first:string; last: string}): void{
//     console.log(`${person.first} ${person.last}`);
// }
// printName({first:"Tom", last: "Smith"});
//
// let coordinate: {x: number; y: number} = { x:34,y:2 }
//
// function  randomCoordinate(): {x: number; y: number}  {
//     return { x: Math.random(), y: Math.random()}
// }
//
// printName({first:"Mike", last:"Jagger"})
// const oldMan= {first:"Mike", last:"Jagger", age: 80, isAlive: true }
// printName(oldMan)


// //Type aliases
// type Point = {
//     x:number;
//     y:number
// }
// let coordinate: Point = { x:34,y:2 }
//
// function  randomCoordinate(): Point  {
//     return { x: Math.random(), y: Math.random()}
// }
// function doublePoint(point: Point) {
//     return{x: point.x*2, y: point.y *2};
// }
//
// type MyNum = number;
// let age: MyNum= 22;

// //nested objects
// const describePerson = ( student: {
//     name: string;
//     age: number;
//     parentNames: {
//         mom: string;
//         dad: string;
//     }
//     }) => {
//     return `student: ${name}
//     Age: ${age}
//     parents:${parentNames.mom}, ${parentNames.dad}`;
// }
// describePerson({name: "jim", age:10, parentNames: {mom: "Kim", dad: "Steve"}})


// //Optional Properties
// type Point = {
//     x:number;
//     y:number;
//     z?: number;
//  }
//  const myPoint: Point= {x:1, y:3, }
// //z we can either write or not
//
//
// //The readonly modifier
// type User = {
//     readonly id: number;
//     userName: string;
// };
// const user: User = {
//     id:1234,
//     userName:"username"
// }
// console.log(user.id)
// user.id
//
// //Intersection Types
// type Circle = {
//     radius: number;
// };
// type colorful ={
//     color: string;
// }
// type colorfulCircle = Circle & colorful;
//
// const happyFace: colorfulCircle = {
//     radius:4,
//     color: "yellow",
// };
//  type Cat = {
//      numLives: number
//  };
//  type Dog ={
//      breed: string;
//  };
//  type CatDog = Cat & Dog & {
//      age:number;
// };
//   const animal: CatDog= {
//       numLives: 7,
//       breed: "Husky",
//       age: 6
//   };
//

//   //Array types
// const Users: string[] = [];
// Users.push("Jane");
// // Users.push(14) Error
//
// const Ages: number[] = []
// Ages[0]= 1
// Ages[4]= 20
//
// type Point = {
//     x: number,
//     y: number
// }
// const coords: Point[]= []
// coords.push({x:23, y:8})
// // coords.push({x:23, y:"8"})Error

//Union types
let age: number | string = 21;
age = 23
age = "14"

type Point = {
    x: number;
    y: number
}
 type Loc = {
    lat: number,
     long: number
 }
 let coordinates: Point | Loc ={x:1,y: 34}
coordinates = { lat:324.12, long: 25.36};

function printAge( age: number | string): void{
    console.log (`You are ${age} years old`);
}
function calculateTax(price:number | string, tax: number){
    if(typeof price=== "string"){
        price = parseFloat(price. replace("$", ""))
    }
     return price* tax
}

//Union types and arrays
let something: (number | string)[]= [1,1,"a",1,"a"];
let something1: (number | string)[]= ["a","b","a"];
let something2: (number | string)[]= [1,1,1,1]

const coords: (Point | Loc) [] = []
coords.push({ lat:324.12, long: 25.36})
coords.push({ x:1, y:34})

let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
    |"Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
let today:DayOfWeek = "Wednesday"

// Tuples
let users: (string | number)[] = [12, "user", "one", 4];
let color: [number, number, number]= [255, 0, 45];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200,"OK"]
const responses: HTTPResponse[]= [[404, "Not Found"],[200, "OK"] ]


//
// PENDING
// SHIPPED
// DELIVERED
//
// const PENDING = 1
// const SHIPPED = 2
// const DELIVERED

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus= OrderStatus.DELIVERED;

function isDelivered(status:OrderStatus){
    return status === OrderStatus.DELIVERED
}
isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP="up",
    DOWN="down",
    LEFT="left",
    RIGHT="right"
}
