function randomColor(){
        let r =Math.round(Math.random()*255)
        let g =Math.round(Math.random()*255)
        let b =Math.round(Math.random()*255)
        return `rgb(${r}, ${g}, ${b})`
    }
    let container= document.querySelector('.container')
    container.style.backgroundColor = randomColor()