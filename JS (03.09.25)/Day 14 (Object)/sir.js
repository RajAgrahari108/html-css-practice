// console.log('Objects');

// // ! Ways to create an object 
// // !1 . by using literals ({})
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// // ! Accessing the properties
// // ! 1. Dot Notation (objName.key)
// console.log(p1.pname);
// console.log(p1.jNo);
// // console.log(p1.7); // error

// // ! 2. Bracket notation (objName['key'])
// console.log(p1['isMarried']); //true
// console.log(p1['7']); //fav No.

// // ! CRUD over objects 
// // ! create 
// let obj = {status:'offline'}
// // ! update
// obj.name = 'Hello'
// obj.place = 'Kerala',
// obj.hobby = 'Scrolling'
// obj.status = 'online'
// console.log(obj);
// // ! delete 
// delete obj.status
// console.log(obj);


// ! methods on Objects 
// !1. Object.keys(obj)
// it will return all the keys of obj in an array 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.keys(p1)); // ['7', 'pname', 'jNo', 'team', 'isMarried']
// !2. Object.values(obj)
// it will return all the values of obj in an array 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.values(p1)); // (5) ['fav No.', 'MSD', 7, 'CSK', true]
// console.log('Objects');

// // ! Ways to create an object 
// // !1 . by using literals ({})
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// // ! Accessing the properties
// // ! 1. Dot Notation (objName.key)
// console.log(p1.pname);
// console.log(p1.jNo);
// // console.log(p1.7); // error

// // ! 2. Bracket notation (objName['key'])
// console.log(p1['isMarried']); //true
// console.log(p1['7']); //fav No.

// // ! CRUD over objects 
// // ! create 
// let obj = {status:'offline'}
// // ! update
// obj.name = 'Hello'
// obj.place = 'Kerala',
// obj.hobby = 'Scrolling'
// obj.status = 'online'
// console.log(obj);
// // ! delete 
// delete obj.status
// console.log(obj);


// ! methods on Objects 
// !1. Object.keys(obj)
// it will return all the keys of obj in an array 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.keys(p1)); // ['7', 'pname', 'jNo', 'team', 'isMarried']
// !2. Object.values(obj)
// it will return all the values of obj in an array 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.values(p1)); // (5) ['fav No.', 'MSD', 7, 'CSK', true]
// ! Object.entries(obj)
// it will return all the key and value pairs as nested arrays in an array 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// console.log(Object.entries(p1)); // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]

// ! Object.seal
// It will seal the object, after that we cannot perform the operations like adding a new property or deleting a property,
// we can only update the existing properties 
// let p1 = {
//     pname:'MSD',
//     jNo:7,
//     team:'CSK',
//     isMarried:true,
//     7:'fav No.'
// }
// Object.seal(p1)
// delete p1.pname; // not possible
// p1.place = 'Kerala' // not possible
// p1.team = "MI" // update is possible
// console.log(p1);

// ! Object.freeze(obj)
// It will freeze the object, after that we cannot perform any operations like adding a new property or deleting a property or updating a property,

let p1 = {
    pname:'MSD',
    jNo:7,
    team:'CSK',
    isMarried:true,
    7:'fav No.'
}
Object.freeze(p1)
delete p1.pname; // not possible
p1.place = 'Kerala' // not possible
p1.team = "MI" // update is possible
console.log(p1);

// ! Object.isFrozen(objName)
// return true if the object is frozen
console.log(Object.isFrozen(p1));

// ! Object.isSealed(objName)
// return true if the object is sealed
console.log(Object.isSealed(p1))


