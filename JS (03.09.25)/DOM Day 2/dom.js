let body = document.body;
let inp = parseInt(prompt("Enter the number of buttons you want"))
for(let i=1; i<=inp; i++){
    body.innerHTML += `<button>button${i}</button>`
}