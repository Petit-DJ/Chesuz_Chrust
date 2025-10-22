const canvas = document.querySelector('canvas');
const secondsCount = document.querySelector(".seconds");
const context = canvas.getContext('2d');
const cheeseD = {width:200, height: 200};

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.translate(window.innerWidth/2, window.innerHeight/2)
const startTime = Date.now ()

const image = new Image()
image.src = './chesuz_christ.png'

const loopingcheese = 50
const offsetDistance = 100
let currentOffset = 0

image.onload = () => {
    loopDraw()
}

function draw(offset) {
    context.drawImage(
         image, 
        -cheeseD.width/2 -offset/2, 
        -cheeseD.height/2 -offset/2, 
        cheeseD.width + offset, 
        cheeseD.height + offset)
}




function loopDraw() {
    for(let i = loopingcheese; i>=1; i--) {
        draw(i*offsetDistance + currentOffset)
    }
    draw(offsetDistance)

    currentOffset++
    if(currentOffset >= offsetDistance) {
        currentOffset = 0
    }

    const newTime = Math.floor((Date.now() - startTime)/1000);

    secondsCount.innerText = newTime


    requestAnimationFrame(loopDraw)
}


function startlooping() {
    requestAnimationFrame(loopDraw)
}