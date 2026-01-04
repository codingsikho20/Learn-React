// normal way dstructuring

// const user = {
//     name: 'ManishNandani',
//     age: 16,
//     city: 'Ballia'
// }

// // const name = user.name
// // const age = user.age


// // destructuring way

// const {name: fullName, city, age} = user;
// console.log(fullName, city, age);

// const {name, age, city} = user;
// console.log(name, age, city);


// array destructuring

// normal way
// const numbers = [10, 20, 30, 40, 50];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // console.log(a, b, c);

// // destructuring way

// const [x, y, z] = numbers;
// console.log(x, y, z);

// // skipping value

// const [p, , q] = numbers;
// console.log(p, q);

// // default value

// const [i = 1, j = 2, k = 3, l = 4, m = 5, n = 6, o = 7] = [10, 20];
// console.log(i, j, k, l, m, n, o);

// nested destructuring

// const person = {
//     name: 'ManishNandani',
//     age: 16,
//     address: {
//         street: 'MG Road',
//         city: 'Ballia',
//         country: 'India'
//     }
// }

// const {name, address: {street, city, country}} = person;
// console.log(name, street, city, country);


// function parameter destructuring

// normal way

// function userInfo(user){
//     console.log(`Name is ${user.name}, Age is ${user.age}, City is ${user.city}`);
// }

// userInfo({name: ManishNandani, age: 1816, city: 'Ballia'});

// destructuring way

// function userDetails({name, age, city}){
//     console.log(`Name is ${name}, Age is ${age}, City is ${city}`);
// }

// userDetails({name: 'ManishNandani', age: 16, city: 'Ballia'});

// rest parameter destructuring

// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
// const [first, second, ...restColors] = colors;
// console.log(first, second, restColors);


// importing default export concept

// import user from './app.js';
// console.log(user);

// importing named export concept

// import {user, age, city} from './app.js';

// console.log(user, age, city);

// importing named export alternative concept

import kuch from './app.js';
console.log(kuch);