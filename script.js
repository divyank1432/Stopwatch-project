const START = document.querySelector("#start");
const PAUSE = document.querySelector("#pause");
const RESET =  document.querySelector("#reset");

let timeInMs = 0;
let timer;


function updateTimer(){
    let sec = Math.floor(timeInMs / 1000) % 60;
    let min = Math.floor(timeInMs / (60 * 1000)) % 60;
    let ms = Math.floor(timeInMs % 1000);

    document.querySelector("#sec").innerText = sec < 10 ? "0" + sec : sec;
    document.querySelector("#min").innerText = min < 10 ? "0" + min : min;
    document.querySelector("#ms").innerText = ms/10 < 10 ? "0" + ms/10 : ms/10;
}

function startTimer(){
    timer = setInterval(() => {
        timeInMs += 10;
        updateTimer();
        
    },10);
}

function pauseTimer(){
    clearInterval(timer);
}


function resetTimer(){
    pauseTimer();
    timeInMs = 0;
    updateTimer();
}

START.addEventListener("click",startTimer);

PAUSE.addEventListener("click",pauseTimer);

RESET.addEventListener("click",resetTimer);