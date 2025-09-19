console.log('object');
// ! way write an Object;


//! 1. by using literals({})

// let p1 = {
//     name : 'raj',
//     jno : 7,
//     team : 'mis',
//     isMarried : true,
//     7 : 'fav no'
// }
// console.log(p1.name);
// console.log(p1.jno);
// console.log(p1.team);
// console.log(p1.isMarried);


// ! 2. bracet Notation 
// ! (objName['key'])
// console.log(p1['7']);
// console.log(p1['isMarried']);


// ! crud over objects
// ! create 
// let obj = {status : 'Offline'};
// // ! update 
// obj.name = 'hello'
// obj.place = 'Kerala'
// obj.hobby = 'Scrolling'
// obj.status = 'online'

//  ! delete 
// delete obj.status
// console.log(obj);


// ! methods on object 

// ! 1.object.keys(obj)

//  let p1 = {
//     name : 'raj',
//     jno : 7,
//     team : 'mis',
//     isMarried : true,
//     7 : 'fav no'
// }

// console.log(Object.keys(p1));

// ! 2.object.values(obj)

//  let p1 = {
//     name : 'raj',
//     jno : 7,
//     team : 'mis',
//     isMarried : true,
//     7 : 'fav no'
// }

// console.log(Object.values(p1));


// ! 2.object.entries(obj)

//  let p1 = {
//     name : 'raj',
//     jno : 7,
//     team : 'mis',
//     isMarried : true,
//     7 : 'fav no'
// }

// console.log(Object.entries(p1));


// ! 2.object.seal(obj)

//  let p1 = {
//     name : 'raj',
//     jno : 7,
//     team : 'mis',
//     isMarried : true,
//     7 : 'fav no'
// }

// console.log(Object.seal(p1));
// Object.seal(p1);
// delete p1.name; // not possibal
// p1.place = 'kerala'// not possibal
// p1.team = 'mi' // update is poassible


// ! 2.object.seal(obj)

 let p1 = {
    name : 'raj',
    jno : 7,
    team : 'mis',
    isMarried : true,
    7 : 'fav no'
}

console.log(Object.seal(p1));
Object.seal(p1);
delete p1.name; // not possibal
p1.place = 'kerala'// not possibal
p1.team = 'mi' // update is poassible


