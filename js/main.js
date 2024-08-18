const koalafirst = document.querySelector('.koala')

for(let i = 0; i < 20; i++){
    let temp = koalafirst.cloneNode(true)
    temp.setAttribute('data-speed', Math.max(1,Math.random()*3))
    temp.style.top = Math.random()*window.innerHeight+'px';
    document.body.appendChild(temp)
}

const koalaz = document.querySelectorAll('.koala')

koalaz.forEach(koala => koala.addEventListener('mouseover', () => {
    alert('YOU LOSE! you must look at my website now')
    window.location.replace("https://sickkmade.github.io")
}))

let mouseX
let mouseY

document.addEventListener('mousemove', event => {
    mouseX = event.clientX
    mouseY = event.clientY
});

function moveKoala(koala){
    if(!(mouseX && mouseY)) return

    let differenceX = koala.offsetLeft - mouseX
    let differenceY = koala.offsetTop - mouseY
    let speed = koala.getAttribute('data-speed')
    let distance = Math.sqrt(differenceX*differenceX + differenceY*differenceY)

    let deg = Math.atan2(mouseY - koala.offsetTop, mouseX - koala.offsetLeft)

    koala.style.left = koala.offsetLeft - (differenceX/distance)*speed+'px'
    koala.style.top =  koala.offsetTop - (differenceY/distance)*speed+'px'

    koala.style.transform = `translate(-50%,-50%) rotate(${deg}rad)`
}

function moveKoalas(){
    koalaz.forEach((koala) => moveKoala(koala))
}

setInterval(() => requestAnimationFrame(moveKoalas), 1)