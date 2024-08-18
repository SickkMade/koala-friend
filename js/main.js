const koala = document.querySelector('#koala')

koala.addEventListener('mouseover', () => {
    alert('YOU LOSE! you must look at my website now')
    window.location.replace("https://sickkmade.github.io")
})

let mouseX
let mouseY

document.addEventListener('mousemove', event => {
    mouseX = event.clientX
    mouseY = event.clientY
});

function moveKoala(){
    if(!(mouseX && mouseY)) return

    let differenceX = koala.offsetLeft - mouseX
    let differenceY = koala.offsetTop - mouseY
    let distance = Math.sqrt(differenceX*differenceX + differenceY*differenceY)

    let deg = Math.atan2(mouseY - koala.offsetTop, mouseX - koala.offsetLeft)

    koala.style.left = koala.offsetLeft - (differenceX/distance)+'px'
    koala.style.top =  koala.offsetTop - (differenceY/distance)+'px'

    koala.style.transform = `translate(-50%,-50%) rotate(${deg}rad)`
}

setInterval(() => requestAnimationFrame(moveKoala), 1)