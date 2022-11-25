// Introduction
// type Point = {
//     x: number,
//     y: number
// }
// const pt: Point = { x:213, y: 12}

interface Point {
    x: number,
    y: number
}
const pt:  Point = {x:213, y: 12 }

interface Person {
    readonly id: number,
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string;

}
// const john: Person = {first: "John", last:"Smith", nickname:"Joe", id:12}
// john.nickname = "Jim"
// john.id = 222 //Error as it is a readonly

const thomas: Person={
    name: "Tom",
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 123,
    sayHi: () => {
        return "Hello";
    }
    }
    thomas.first = "Tomy";

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number):number;
}
const shoes: Product = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount: number) {
      var newPrice = this.price *(1- amount);
      this.price = newPrice;
      return this.price
    }
}
console.log(shoes.applyDiscount(0.4))


//Reopening Interfaces
interface Dog{
    name: string;
    age: number;
}
interface Dog {
    breed: string;
    bark(): string
}
const elton: Dog = {
    breed:"Australian Shepherd",
    name:"Elton",
    age:0.5,
    bark() {
        return "WOOF WOOF!"
    }
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return"Bark!"
    },
    job:"guide dog"
}

interface Person {
    name:string
}
interface Employee {
    readonly id: number,
    email:string
}
interface Engineer extends Person,Employee {
    level:string,
    languages: string[]
}

// const pierre: Engineer = {
//     name:"Pierre",
//     id: 123,
//     email: "pierre@gmail.com",
//     level: "senior",
//     languages: ["JS", "TS"]
// }
