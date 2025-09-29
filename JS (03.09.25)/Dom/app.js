// ! crud 

console.log(document);

// ! 2.  document.getElementById("id")

// ir will return a single html element Node(Object formate)

let item  = document.getElementById("list2");
let head = document.getElementById("heading");


console.log(item);
console.log(head);




// ! 2. document.getElementsByTagName("tag name")

let allLi = document.getElementsByTagName("li");
console.log(allLi);

for(let i=0; i<allLi.length; i++){
    console.log(allLi[i]);
    
}
