// TODO:  Type Annotations

let myName: string = 'John Doe';
// myName = 213;
// Error: Type 'number' is not assignable to type 'string'.
let isCool: boolean = true;
let age: number = 23;

function add(a: number, b: number): number {
  return a + b;
}

//console.log(add(1, '2'));
// Error: Argument of type '"2"' is not assignable to parameter of type 'number'.

// TODO: Inferred Types

// Typescript can infer the type of the variable

let inferredName = 'John Doe';
let inferredAge = 23;
let inferredIsCool = true;

function subtract(a: number, b: number) {
  return a - b;
}

console.log(subtract(1, 2));

// TODO: Union Types

// Union types allow us to define multiple types for a variable

const numberAndString: (string | number)[] = ['say hello', 2, 'hello', 3];

// TODO: Objects and Interfaces

// Interfaces allow us to define the structure of an object

type developerType = 'frontend' | 'backend' | 'fullstack';

interface Person {
  name: string;
  favNumber: number;
  catName?: string;
  developerType?: developerType;
  currentTime?(): Date;
}

const person: Person = {
  name: 'John Doe',
  favNumber: 23,
  currentTime: () => new Date(),
};

const me: Person = {
  name: 'Eyup',
  favNumber: 7,
  developerType: "frontend"
}

function greet(person: Person) {
  console.log(`Hello ${person.name}, , it is  ${person.currentTime?.()} now`);
}

function greetPersonAndCat(person: Person) {
  if (person.catName) {
    return console.log(`Hello ${person.name} and your cat ${person.catName} , it is  ${person.currentTime?.()} now`);
  }
  if (person.developerType) {
    return console.log(`Hello ${person.name} and your developer type is ${person.developerType}, it is  ${person.currentTime?.()} now`);
  }

  return greet(person);
};


greet(person);
greetPersonAndCat(me);

// TODO: Type

// Type is a way to define a custom type.

type PersonType = {
  name: string;
  favNumber: number;
  catName?: string;
};


// TODO: Optional Properties

// TODO: Classes

// TODO: Generics

// TODO: any, unknown, never

// TODO: Type Assertions

// @ts-ignore / @ts-nocheck
