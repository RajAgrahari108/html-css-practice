// !spread and rest
// spread is ues to unpack tha any iteration
// it is use to unpack the character if the string or the element of the array or properties of an object


// !with strin
// let str = "javascript"
// console.log(...str);
// console.log('j', 'a','v','a');

// !convert in array in String
// console.log([...str]);

//! with array 

// let a =[10, 20, 30];
// let b = a;
// b.push(60);
// a.shift()
// console.log(a);
// console.log(b);

// ! shallow copy

// let a =[10, 20, 30];
// let b = [...a];
// b.push(60);
// a.shift()
// console.log(a);
// console.log(b);


// ! shallow copy
// let arr = [10, 20, {name:'a'},[80]]
// let arr2= [...arr]
// arr2[1]= 50;
// arr2[2].name = b;
// console.log(arr);
// console.log(arr2);

// ! deep copy
// let arr = [10, 20, {name:'a'},[80]]
// let arr2= JSON.parse(JSON.stringify(arr))
// arr2[1]= 50;
// arr2[2].name = 'b';
// console.log(arr);
// console.log(arr2);



// spread with object



// let a=[23,4,29,30, 40, 50,60];
// a.splice(0, 3,100, 200)
// console.log(a);



// let str = "javscript"
// console.log(str.slice(0, 5));




const users = [
  { id: 1, name: "Akshay", age: 23, city: "Delhi", isActive: true },
  { id: 2, name: "Vinit", age: 28, city: "Mumbai", isActive: false },
  { id: 3, name: "Rohit", age: 25, city: "Pune", isActive: true },
  { id: 4, name: "Pranav", age: 19, city: "Delhi", isActive: false },
  { id: 5, name: "Karan", age: 30, city: "Bangalore", isActive: true }
];
// 1. Get an array of all the names from the users array.
// 2. Filter out users who are active (isActive: true).
// 3. Find the first user who lives in “Delhi.”
// 4. Calculate the total age of all users using reduce().
// 5. Sort the array by age in ascending order.




let res = users.map((item)=>{
    return item.name
})
console.log(res);

let res1 = users.filter((item)=>{
    return item.isActive==true;
})
console.log(res1);

let res3 = users.find((item)=>{
    return item.city=='Delhi'
})
console.log(res3);

let res4 = users.reduce((acc, i)=>{
    return acc+i.age;
},0)
console.log(res4);