// //! reduce 

// let arr = [10,20, 30, 40];
// let sum = arr.reduce((acc, el, i, arr)=>{
//     return acc + el;
// })

// let prod = arr.reduce((acc, el, i, arr)=>{
//     return acc * el;
// })

// let temp = arr.reduce((acc, el, i, arr)=>{
//     console.log(acc, el);
    
//     return acc + el;
// })
// // ! after passing the initalvalue
// let summ = arr.reduce((acc, el, i, arr)=>{
//      console.log(acc, el);
//     return acc + el;
// },500)

// console.log(sum);
// console.log(prod);
// console.log(temp);
// console.log(summ);

// console.log("======================================================================")
// // ! reduceRight

// let summm = arr.reduceRight((acc, el, i, arr)=>{
//      console.log(acc, el);
//     return acc + el;
// },500)
// console.log(summm);




// ! reverse a stirng
let str = 'hey hello hii'
let reverse = str.split(' ').reduceRight((acc, el, i)=>{
     console.log(acc, el);
    return acc+' '+el;
})
console.log(reverse);




let str1 = 'this is a javascript we are learning' 
let word  = str1.split(' ');
let output = word.reduce((acc, el)=>{
    return acc.length > el.length ? acc : el;
}) 
console.log(output);
