    // function hero(){
    //     console.log("manishNandani");
    //     return "manishNandaniMeriJaan";
    // }

    // const heroaName = hero();

    // console.log(heroaName);


// function add(a, b){
//     return a + b
// }

// console.log(add(10, 20));
// console.log(add(30, 40));
// console.log(add(50, 60));       


// import hero from './app.js';
// import test from './test.js';

// console.log(test())

// test()

// console.log(hero);


// var h1 = document.createElement("h1");
// h1.innerText = "manish nandani meri jaan";
// document.body.appendChild(h1);

// create UI with using react js

// const h1 = React.createElement("h1",{id:'hero'}, "Hello from React JS");
// const h2 = React.createElement("h2", {id:'heroine'}, "hello from Nandani");

// const div = React.createElement("div",{id:'parent', class:'elem'}, [h1, h2]);

// const container = document.querySelector("#container");

// const root = ReactDOM.createRoot(container);

// root.render(div)

// function h1 (){

//     return React.createElement('h1', null, 'Hello Nandani from react js')
// }

import parent from "./parent.js";

const root = ReactDOM.createRoot(document.querySelector('#container'));

root.render(parent());