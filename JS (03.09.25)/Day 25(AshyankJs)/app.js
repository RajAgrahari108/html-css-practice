// ! 13.10.2025

console.log('hello');
setTimeout(()=>{
    console.log('Set time out');
    
})
console.log('bye');
   

// !promish
// promish is an object use to handel the eventual complettion or failer of an asynchronious operation.

// !promish has 3 state
// 1. pendinhg  = this promish is nither resolve nor rejected
// 2. filfilled = we reject the data successfully
// 3. reject =  the data is not receive


// ! promish consumung / handling mrthod

// 1.the(callback function.) = it will be executed when promish wil be resolve
// 2.catch(callback function.) = it will be executed when promish wil be reject
// 3.finally(callback function.) = it will be executed in both the cases

// let p = new Promise((res, rej) =>{

// })
// console.log(p); //function {<Pending>}

// let p = new Promise((res, rej) =>{
//     res('hello thus is the data')
// })
// console.log(p); //function {<fullfilled>}('hello thus is the data')



// let p = new Promise((res, rej) =>{
//     rej('hello this is error')
// })
// console.log(p); //function {<rejected>}(''hello this is error')













//!  promish  same as that tthe sent by the server


let  p1 =new Promise((res, rej) =>{
    let random = Math.round(Math.random()*10)

    setTimeout(()=>{
        if(random>5){
            res('this is the data')
        }else{
            rej('this is error')
        }
    }, 5000)    
})

console.log(p1);
p1.then((data)=>{
    console.log(data);
    
})
p1.catch((data)=>{
    console.log(error);
    
})
p1.finally((data)=>{
    console.log('finally');
    
})

console.log('end');

