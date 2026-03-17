// PAGE CHANGE

function nextPage(page){

heartExplosion()

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById("page"+page).classList.add("active")

if(page==2) startTypewriter()

if(page==3) startGame()

}



// RELATIONSHIP TIMER

let startDate=new Date("Dec 18 2025")

function updateTimer(){

let now=new Date()

let diff=now-startDate

let days=Math.floor(diff/(1000*60*60*24))

let hours=Math.floor((diff/(1000*60*60))%24)

document.getElementById("timer").innerHTML=
"Together for "+days+" days "+hours+" hours ❤️"

}

setInterval(updateTimer,1000)



// TYPEWRITER LETTER

let text=`These three months with you have been the most beautiful part of my life.

Your smile makes every day brighter and your love makes my world complete.

Thank you for loving me and being with me.

Happy 3 month anniversary my love ❤️`

let i=0

function startTypewriter(){

let el=document.getElementById("letter")

let interval=setInterval(()=>{

el.innerHTML+=text[i]

i++

if(i>=text.length) clearInterval(interval)

},40)

}



// HEART FIREWORKS

function heartExplosion(){

for(let i=0;i<20;i++){

let heart=document.createElement("div")

heart.innerHTML="💖"

heart.className="fire"

heart.style.left=Math.random()*window.innerWidth+"px"

heart.style.top=Math.random()*window.innerHeight+"px"

document.getElementById("hearts-container").appendChild(heart)

setTimeout(()=>heart.remove(),1000)

}

}



// ROMANTIC GAME (MOBILE)

let score=0

function startGame(){

let area=document.getElementById("gameArea")

let scoreBoard=document.getElementById("score")

let game=setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.className="gameHeart"

heart.style.left=Math.random()*80+"%"

heart.style.top=Math.random()*80+"%"

area.appendChild(heart)

heart.onclick=()=>{

heart.remove()

score++

scoreBoard.innerHTML=score+" / 10"

if(score>=10){

clearInterval(game)

nextPage(4)

startSlideshow()

}

}

setTimeout(()=>heart.remove(),2000)

},800)

}



// SLIDESHOW

function startSlideshow(){

let images=document.querySelectorAll(".slideshow img")

let song=document.getElementById("song")

song.play()

let i=0

images[0].style.display="block"

let slide=setInterval(()=>{

images[i].style.display="none"

i++

if(i>=images.length){

clearInterval(slide)

song.pause()

document.getElementById("popup").style.display="block"

return

}

images[i].style.display="block"

},3000)

}



// FINAL FIREWORKS

function fireworks(){

for(let i=0;i<50;i++){

let heart=document.createElement("div")

heart.innerHTML="💖"

heart.className="fire"

heart.style.left=Math.random()*window.innerWidth+"px"

heart.style.top=Math.random()*window.innerHeight+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),1000)

}

}
requestAnimationFrame(drawStars)

}

drawStars()
