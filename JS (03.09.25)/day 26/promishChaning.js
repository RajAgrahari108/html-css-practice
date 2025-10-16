


// ! promish channing
// it isa away to handel multipal onr after another as a chai 

// let p1 = new promish((res, rej) =>{
//     res(50)
// });
// p1.then((a)=>{
//     console.log(a);
//     return 20;
// }).then((b)=>{
//     console.log(b);
//     return 10;
    
// }).then((c)=>{
//     console.log(c);
// })

// ! async await
//!  async and await are the keyword in js


// async keyword is use to before the funtion declaration 
//  it is used to create an asynchronous function 
//  asynch function will always retun a promish

// async function getDatar(){
//     return 20;
// }
// console.log(getDatar);

// ! JSON
let jsonObj = {
    "name" : "raj",
    "agr" : 23,
    "Skill" : {},
    "hobbes" : [],
    "isMarid" : true

}
console.log(jsonObj);

// ! 1. JSON.parse(jsonObj);

let a = JSON.parse(jsonObj);
console.log(a);
// ! 2. JSON.stringify(jsonObj);
let json2 = JSON.stringify(a)
console.log(json2);



