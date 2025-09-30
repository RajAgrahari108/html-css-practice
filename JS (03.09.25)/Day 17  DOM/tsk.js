
const urls = [
  "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn.jpg",
  "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop",
  "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn.jpg",
  "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXimk_wDIZPH8kk4YnpyCOdjPACrJpK2rA4g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu9uulWIgqP6ax8ikiM4eQUf2cNqGtOMkaQ&s",
  
];


// for(let i=1; i<=imgs; i++){
// let body= document.body;
// let img = document.createElement('img');
// img.src = i;
// img.height='200'
// img.width='200'
// body.appendChild(imgs);
// }




let body= document.body;
urls.forEach((el)=>{
    let img = document.createElement('img');
img.src = el;
img.height='200'
img.width='400'
body.appendChild(img);
})