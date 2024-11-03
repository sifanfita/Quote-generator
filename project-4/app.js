const startStopBtn = document.querySelector("#startStopBtn");  
const resetBtn = document.querySelector("#resetBtn");  

let seconds = 0;  
let minutes = 0;  
let hours = 0;  

let leadingSeconds = 0;  
let leadingMinutes = 0;  
let leadingHours = 0;  

let timerInterval = null;  
let timerStatus = 'stopped';  

function stopWatch() {  
    seconds++; // Increment seconds  

    // Check if seconds reach 60  
    if (seconds >= 60) {  
        seconds = 0; // Reset seconds  
        minutes++; // Increment minutes  

        // Check if minutes reach 60  
        if (minutes >= 60) {  
            minutes = 0; // Reset minutes  
            hours++; // Increment hours  
        }  
    }  

    // Format leading time values  
    leadingSeconds = (seconds < 10) ? '0' + seconds : seconds;  
    leadingMinutes = (minutes < 10) ? '0' + minutes : minutes;  
    leadingHours = (hours < 10) ? '0' + hours : hours;  

    // Correctly get the first element with class 'timer'  
    let displayTimer = document.getElementsByClassName('timer')[0];  
    displayTimer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;  
}  

// Start/Stop button functionality  
startStopBtn.addEventListener('click', function() {  
    if (timerStatus === 'stopped') {  
        timerInterval = window.setInterval(stopWatch, 1000);  
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';  
        timerStatus = 'started';  
    } else {  
        window.clearInterval(timerInterval);  
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';  
        timerStatus = 'stopped';  
    }  
});  

// Reset button functionality  
resetBtn.addEventListener('click', function() {  
    // Clear the interval if it's running  
    if (timerStatus === 'started') {  
        window.clearInterval(timerInterval);  
        timerStatus = 'stopped';  
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';  
    }  
    
    // Reset time variables  
    seconds = 0;  
    minutes = 0;  
    hours = 0;  

    // Update the display  
    leadingSeconds = leadingMinutes = leadingHours = '00';  
    let displayTimer = document.getElementsByClassName('timer')[0];  
    displayTimer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;  
});