// primitives - number, string, boolean
// more complex type - arrays, objects
// function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// primitive - 
// number - 
var age;
age = 21.2;
var username = 'morish';
var isInstructor = true;
// more complex type - 
// array
var hobbies = ["Sport", "cricket", "football"];
// object
// let person = {name: "Morish", age: 23}
var person;
person = {
    name: "morish",
    age: 34
};
// type interference
// let course = "react"
// course = 12132 
// using union type - union type allow more than one type to be used in a single variable
var course = "react";
course = 23;
course = true;
var about;
about = {
    name: "morish",
    age: 32
};
// function and function type
function add(a, b) {
    return a + b;
}
function add1(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// generics
// function insertAtBeginning(array: any, value: any){
//     const newArray = [value, ...array]
//     return newArray
// }
// const demoArray = [1,2,3]
// const updatedArray = insertAtBeginning(demoArray, -1) // [-1,1,2,3]
// conerting insertAtBeginning function nto generic function``
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
