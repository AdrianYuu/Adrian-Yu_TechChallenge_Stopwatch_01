const time_display = document.querySelector(".box .timer");
const start_button = document.getElementById("start");
const pause_button = document.getElementById("pause");
const reset_button = document.getElementById("reset");

start_button.addEventListener('click', startTimer);
pause_button.addEventListener('click', pauseTimer);
reset_button.addEventListener('click', resetTimer);

let seconds = 0;
let interval = null;

function timer(){
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let secs = seconds % 60;

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(secs < 10) secs = '0' + secs;

    let time = hours + " : " + minutes + " : " + secs;
    time_display.innerHTML = time;
}

function startTimer(){
    if(interval) return;
    interval = setInterval(timer, 1000);
}

function pauseTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    pauseTimer();
    seconds = 0;
    time_display.innerHTML = '00 : 00 : 00'
}