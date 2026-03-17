function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById("page"+page).classList.add("active")

if(page==2) startTypewriter()

if(page==3) startGame()

}



// TIMER

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



// TYPEWRITER

let message=`These three months with you have been the most beautiful part of my life.

Your smile makes every day brighter and your love makes my world complete.

Thank you for loving me and staying beside me.

Happy 3 month anniversary my love ❤️`

function startTypewriter(){

let el=document.getElementById("typeText")

el.innerHTML=""

let i=0

let typing=setInterval(()=>{

el.innerHTML+=message[i]

i++

if(i>=message.length) clearInterval(typing)

},40)

}



// GAME

let score=0

function startGame(){

let area=document.getElementById("gameArea")

let scoreText=document.getElementById("score")

let spawn=setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.className="heart"

heart.style.left=Math.random()*90+"%"

heart.style.top=Math.random()*80+"%"

area.appendChild(heart)


heart.onclick=()=>{

heart.remove()

score++

scoreText.innerHTML=score+" / 7"

if(score>=7){

clearInterval(spawn)

nextPage(4)

startSlideshow()

}

}

setTimeout(()=>heart.remove(),2000)

},700)

}



// SLIDESHOW + SONG

function startSlideshow(){

let slides=document.querySelectorAll(".slide")

let song=document.getElementById("song")

song.currentTime=0

song.play().catch(()=>{})

let i=0

slides[0].style.display="block"

let show=setInterval(()=>{

slides[i].style.display="none"

i++

if(i>=slides.length){

clearInterval(show)

song.pause()

document.getElementById("finalMessage").style.display="block"

return

}

slides[i].style.display="block"

},3000)

}
