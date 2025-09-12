let username = prompt("Enter the name : ");


// let first = username.charAt(0);
// let second = username.slice(1);

// console.log(first.toUpperCase() + second.toLocaleLowerCase());
// console.log(first.toLocaleLowerCase() + second.toUpperCase());
// console.log(username.toUpperCase());

// let str1 = 'R' + username.substring(1);
// console.log(str1);


// console.log();



// console.log(username.toUpperCase());




let fc= username.charAt(0);
if('aeiou'.includes(fc.toLowerCase())){
    console.log(`the name ${username} start with vowel`);
    
}else{
    console.log(`the name ${username} dose not start with vowel`);

}