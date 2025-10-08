
let items = document.querySelectorAll(".items");


function randomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}


items.forEach(function (div) {
  div.addEventListener("click", function () {
    div.style.backgroundColor = randomColor();
  });
});
