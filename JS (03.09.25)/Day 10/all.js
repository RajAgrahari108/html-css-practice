// // concanate

// let firstname= "raj"
// let lstName = "Agrahari";
// let fullName= firstname.concat(' ', lstName);
// console.log(fullName);

// console.log();



// ! Imp Concepts
// Hoisting
// TDZ
// let , var , const
// truthy falsy values
// all the functions
// closure

// ! String
// String is immutable
// let str = 'abc'
// let str1 = "abc";
// let str2 = abc;
// let str3 = new String('abc')
// let str4 = new String('abc')
// console.log(str == str1);
// console.log(str == str2);
// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(str == str3);
// console.log(str === str3);

// console.log(str3 == str4);

// ! immutability
// let str = 'java';
// str[0] = 'k'
// console.log(str[0]);
// str = 'script'
// console.log(str);


// ! concatination
let fName = 'Rohit'
let lName = 'Sharma'
console.log(fName+' '+lName);




// ! properties and methods 
// property
// ! length
// it will return the length(no. of characters) of the string 
// let str = 'javascript';
// console.log(str.length); // 10

// ! methods 
// ! 1. toLowerCase()
// it will convert all the characters of the string to lowercase
// and it will return a new string
// let str = 'VIRAT'
// let lstring = str.toLowerCase();
// console.log(lstring);
// console.log(str);
// ! 2. toUppperCase()
// it will convert all the characters of the string to lowercase
// and it will return a new string
//  let str = 'java';
// let res=  str.toUpperCase()
// console.log(res);
// console.log(str);

// !3. trimStart();
// it will remove the unnecessary spaces from the beginning of the string
// let str = '                               java'
// console.log(str.length);
// let ts = str.trimStart()
// console.log(ts.length);
// !4. trimEnd();
// it will remove the unnecessary spaces from the beginning of the string
// let str = 'java                          '
// console.log(str.length);
// let ts = str.trimEnd()
// console.log(ts.length);
// !5. trim();
// it will remove the unnecessary spaces from the beginning and the end of the string
// let str = '                    java                          '
// console.log(str.length);
// let t= str.trim()
// console.log(t.length);

// !6. indexOf('char')
// it will return the index of first occurrence of the character
// if the character is not present in the string it will return -1
// let str = 'javascripts'
// console.log(str.indexOf('s'));//4
// console.log(str.indexOf('s'));//-1

// !7. lastIndexOf('char')
// it will return the index of last occurrence of the character
// let str = 'java'
// console.log(str.lastIndexOf('a')); // 3
// console.log(str.indexOf('a'));

// ! 8. charAt(index)
// it will return the character present at a particular index
// let str = 'javascript'
// console.log(str.charAt(0)); // j
// console.log(str.charAt(9)); // t
// console.log(str.charAt(20)); // ''



// let str = 'javascript'
// !9. substring(s.i , e.i)
// it will return a specific part of the string based oon the si and ei , substring does not accept negative index
// e.i is always excluded
// console.log(str.substring(0 , 4));
// console.log(str.substring(4 , 10)); //script
// console.log(str.substring(4)); //script
// !10. substr(s.i , length)
// it is deprecated
// console.log(str.substr(0 , 4)); // java
// console.log(str.substr(4 , 6)); // script


// !11. slice(s.i , e.i)
// slice is similar to substring
// it will accept the negative index values
// console.log(str.slice(-6 , -2));

// ! Question 
// Take input from the user as username ('rohit')
// Rohit
// rOHIT
// ROHIT
// let username = prompt('Enter Your Name');
// console.log(username);
// let firstLetter = username.charAt(0);
// let remLettter = username.slice(1)
// console.log(firstLetter.toUpperCase()+remLettter.toLowerCase());
// console.log(firstLetter.toLowerCase()+remLettter.toUpperCase());
// console.log(username.toUpperCase());


// function toCapitalize(str){
//     return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
// }
// let name = 'AKSHAY';
// let res = toCapitalize(name)
// console.log(res);

// !12. replace('prevSubst' , 'newSubst')
// it will replace the first occurence of a substring with a new substing
// let str = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replace('HA' , 'HE')
// console.log(temp);
// !12. replaceAll('prevSubst' , 'newSubst')
// it will replace the all tge occurence of a substring with a new substing
// let str = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replaceAll('HA' , 'HE')
// let temp1 = str.replaceAll('HE' , 'HA')
// console.log(temp);
// console.log(temp1);

// ! includes()
// includes will return a boolean value , it will return true if a character is present inside the string,otherwise false 
// console.log('akshay'.includes('a')); // true
// console.log('akshay'.includes('z')); // false

// ! Ques 
// ! Check if a name starts with vowel or not
let username = prompt('Enter your name');
let fc = username.charAt(0)
if('aeiou'.includes(fc.toLowerCase())){
    console.log(The name ${username} starts with a vowel);
}else{
    console.log(The name ${username} does not  starts with a vowel);
}


// ! at()

// ! split()
// ! fromCharCode()
// ! charCodeAt()
// ! endsWith()
// ! startsWith()