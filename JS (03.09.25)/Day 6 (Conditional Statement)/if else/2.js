// let num = parseInt(prompt("Enter the number : "));
// // let num = 15;

// if(num %2==0 ){
//     console.log('even number');
    
// }else{
//     console.log('odd number');
// }




// discount


// let amount = parseInt(prompt("Enter the Amount : "));
// let num = 15;

let amount = 5000;

if(amount > 8000){
    console.log(`your discounted price after buying the ${amount-amount*0.2}`);
    
}else if(amount > 5000){
        console.log(`your discounted price after buying the ${amount-amount*0.15}`);

    
}else if(amount < 3000){
       console.log(`your discounted price after buying the ${amount-amount*0.1}`);
    
}else{
    console.log('wrong amount');
    
}
