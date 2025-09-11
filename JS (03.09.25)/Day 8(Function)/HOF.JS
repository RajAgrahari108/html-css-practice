// h o f


function clack(a, b, c){
    a(b,c);

}
clack(sum , 10, 20);
clack(sub , 10, 20);
clack(mult , 10, 20);

clack((p1, p2)=>
    {
        console.log(p1%p2);
        
    },23, 3)


function sum(p1, p2){
    console.log(p1+p2);
    
}