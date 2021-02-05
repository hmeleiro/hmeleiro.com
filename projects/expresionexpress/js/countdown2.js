var startTime = Date.now();
var seconds = Math.floor(Math.random() * 65) + 45;
var countDownAmount = seconds * 1000; // ms
var countDownEnd = startTime + countDownAmount;
var frameCount = 0;
var beep = new Audio('sounds/beep-02.mp3');
var buzz = new Audio('sounds/beep-05.mp3');

function formatTime(ms) {
    var mseconds = String(ms % 1000);
    while (mseconds.length < 3) {
        mseconds = "0" + mseconds;
    }

    var seconds = String(Math.floor(ms / 1000) % 60);
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var minutes = String(Math.floor(ms / (60 * 1000)) % 60);
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    var hours = String(Math.floor(ms / (60 * 60 * 1000)));

    return hours + "h  " + minutes + "m  " + seconds + "s  " + mseconds + "ms";
}

function updateTimer() {
    var timerElm = document.getElementById("timer");

    var remainingTime = countDownEnd - Date.now();
    if (remainingTime < 0) {
        remainingTime = 0;
    }

    timerElm.innerHTML = formatTime(remainingTime);



    if (frameCount <= (15 * 2 * 60)) {
        if (frameCount % 70 === 0) {
            beep.play();
        }
    }

    if (frameCount > (15 * 2 * 60) && frameCount <= (30 * 2 * 60)) {
        if (frameCount % 36 === 0) {
            beep.play();
        }
    }

    if (frameCount > (30 * 2 * 60) && frameCount <= (45 * 2 * 60)) {
        if (frameCount % 10 === 0) {
            beep.play();
        }
    }

    if (frameCount > (45 * 2 * 60)) {
        if (frameCount % 4 === 0) {
            beep.play();
        }
    }


    var mainpanel = document.getElementById("mainpanel").style.display
    if (mainpanel == "none") {
        return
    }


    if (remainingTime) {
        requestAnimationFrame(updateTimer);
        frameCount++;
    } else {
        buzz.play();
    }
}