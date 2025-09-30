// const { createElement } = require("react");

// let body = document.body;
// let inp = parseInt(prompt("Enter the number of buttons you want"))
// for(let i=1; i<=inp; i++){
//     body.innerHTML += `<button>button${i}</button>`
// }


let body = document.body;
let ol = document.createElement('ol');
let li = document.createElement('li');
li.innerHTML = 'coffee';
let li2 = document.createElement('li');
li2.innerHTML = 'Tea';

ol.appendChild(li);
ol.appendChild(li2);
body.appendChild(ol)


