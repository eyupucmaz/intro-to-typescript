// TODO:  Type Annotations

// let myName: string = 'John Doe';
// myName = 213;
// Error: Type 'number' is not assignable to type 'string'.
// let isCool: boolean = true;
// let age: number = 23;

// function add(a: number, b: number): number {
//   return a + b;
// }

//console.log(add(1, '2'));
// Error: Argument of type '"2"' is not assignable to parameter of type 'number'.

// TODO: Inferred Types

// Typescript can infer the type of the variable

// let inferredName = 'John Doe';
// let inferredAge = 23;
// let inferredIsCool = true;

// function subtract(a: number, b: number) {
//   return a - b;
// }

// console.log(subtract(1, 2));

// TODO: Union Types

// Union types allow us to define multiple types for a variable

// const numberAndString: (string | number)[] = ['say hello', 2, 'hello', 3];

// TODO: Objects and Interfaces

// Interfaces allow us to define the structure of an object

// type developerType = 'frontend' | 'backend' | 'fullstack';

// interface Person {
//   name: string;
//   favNumber: number;
//   catName?: string;
//   developerType?: developerType;
//   currentTime?(): Date;
// }

// const person: Person = {
//   name: 'John Doe',
//   favNumber: 23,
//   currentTime: () => new Date(),
// };

// const me: Person = {
//   name: 'Eyup',
//   favNumber: 7,
//   developerType: "frontend"
// }

// function greet(person: Person) {
//   console.log(`Hello ${person.name}, , it is  ${person.currentTime?.()} now`);
// }

// function greetPersonAndCat(person: Person) {
//   if (person.catName) {
//     return console.log(`Hello ${person.name} and your cat ${person.catName} , it is  ${person.currentTime?.()} now`);
//   }
//   if (person.developerType) {
//     return console.log(`Hello ${person.name} and your developer type is ${person.developerType}, it is  ${person.currentTime?.()} now`);
//   }

//   return greet(person);
// };


// greet(person);
// greetPersonAndCat(me);

// TODO: Type

// Type is a way to define a custom type.

// type PersonType = {
//   name: string;
//   favNumber: number;
//   catName?: string;
// };


// TODO: Classes

// class Person {
//   name: string;
//   favNumber: number;
//   catName: string;

//   constructor(name: string, favNumber: number, catName: string) {
//     this.name = name;
//     this.favNumber = favNumber;
//     this.catName = catName;
//   }
// }

class Person {
  static species = 'homo sapiens'
  // a way to define private variable
  #privateKey = '';
  constructor(
    public name: string,
    public favNumber: number,
    public catName: string,
    protected internalSecret?: string,
    private privateSecret?: string,
    privateKey?: string
  ) {
    this.#privateKey = privateKey || 'default private key';
  }
}
const eyup = new Person('Eyup', 7, 'Milo');

function greet(person: Person) {
  return `Hello ${person.name}, your favorite number is ${person.favNumber} and your cat name is ${person.catName}`;
}
greet(eyup);
console.log(greet(eyup));

// TODO: Generics

function sortItems<MyArrayType>(
  items: MyArrayType[],
  compareFn: (a: MyArrayType, b: MyArrayType) => number
): MyArrayType[] {
  return items.sort(compareFn);
}
// you can pass one or more types to the generic function
function sortItems1<T, S>(
  items: T[],
  compareFn: (a: T, b: T) => number
): (T | S)[] {
  return items.sort(compareFn);
}
// Also pass default type to the generic function
function sortItems2<T = number, S = string>(
  items: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  return items.sort(compareFn);
}

const numbers = [5, 32, 23, 14, 56, 63, 73, 88, 90, 130];

const sortedNumbers = sortItems<number>(
  numbers,
  (a, b) => a - b
);

console.log(sortedNumbers);

const names = ['eyup', 'CJ', 'john doe', 'sherlock', 'watson', 'moriarty'];
const sortedNames = sortItems<string>(names, (a, b) => a.localeCompare(b));

console.log(sortedNames);
// TODO: any, unknown, never

function log(a: any) {
  console.log(a);
}

// ! Be careful with unknown type
const a = 'hello' as unknown as number;
// a.toFixed();
// Error: Property 'toFixed' does not exist on type 'string'. in runtime it will throw an error


// TODO: Type Assertions



// @ts-ignore / @ts-nocheck
