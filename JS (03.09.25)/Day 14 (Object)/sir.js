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
