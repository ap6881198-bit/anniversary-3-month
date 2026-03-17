// PAGE SWITCH

function nextPage(page){

createHearts()

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById("page"+page).classList.add("active")

}

// HEART RAIN

function createHearts(){

for(let i=0;i<50;i++){

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.className="heart"

heart.style.left=Math.random()*100+"%"

document.getElementById("hearts").appendChild(heart)

setTimeout(()=>heart.remove(),3000)

}

}

// RELATIONSHIP TIMER

let startDate=new Date("Dec 18 2025 00:00:00")

function updateTimer(){

let now=new Date()

let diff=now-startDate

let days=Math.floor(diff/(1000*60*60*24))

let hours=Math.floor((diff/(1000*60*60))%24)

document.getElementById("timer").innerHTML=
"Together for "+days+" days "+hours+" hours"

}

setInterval(updateTimer,1000)


// GAME

let player=document.getElementById("player")
let target=document.getElementById("target")

let x=180

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowLeft") x-=20
if(e.key==="ArrowRight") x+=20

player.style.left=x+"px"

checkCatch()

})

function checkCatch(){

let p=player.getBoundingClientRect()
let t=target.getBoundingClientRect()

if(Math.abs(p.left-t.left)<40){

nextPage(4)

startSlideshow()

}

}


// SLIDESHOW

function startSlideshow(){

let images=document.querySelectorAll(".slideshow img")

let song=document.getElementById("song")

song.play()

let i=0

images[0].style.display="block"

let interval=setInterval(()=>{

images[i].style.display="none"

i++

if(i>=images.length){

clearInterval(interval)

song.pause()

document.getElementById("popup").style.display="block"

return

}

images[i].style.display="block"

},3000)

}


// FIREWORKS

function fireworks(){

for(let i=0;i<80;i++){

let heart=document.createElement("div")

heart.innerHTML="💖"

heart.className="heart"

heart.style.left=Math.random()*100+"%"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),2000)

}

}


// STARRY BACKGROUND

let canvas=document.getElementById("stars")

let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{
ctx.beginPath()
ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
ctx.fill()
})

requestAnimationFrame(drawStars)

}

drawStars()
