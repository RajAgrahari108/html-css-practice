const users = [
  { id: 1, name: "Akshay", age: 22, city: "Delhi", isActive: true },
  { id: 2, name: "Neha", age: 28, city: "Mumbai", isActive: false },
  { id: 3, name: "Rohit", age: 25, city: "Pune", isActive: true },
  { id: 4, name: "Sneha", age: 19, city: "Delhi", isActive: false },
  { id: 5, name: "Karan", age: 30, city: "Bangalore", isActive: true }
]

let userName = users.map((item)=>{
    return item.name
})
console.log(userName);

let data = users.filter((item)=>{
    if(item.isActive===true)
        return item
})
console.log(data)


let location = users.find((item)=>{
    if(item.city==='Delhi')
        return item
})

console.log(location);

let age = users.reduce((acc,el)=>{
    return acc+el.age
},0)

console.log(age);