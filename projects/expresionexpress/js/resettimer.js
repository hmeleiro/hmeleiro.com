function reset() {
    var seconds = Math.floor(Math.random() * 10) + 1;
    //$seconds = document.querySelector('#counter');
    window.seconds = seconds;
}

function reset2() {
    var startTime = Date.now();
    var seconds = Math.floor(Math.random() * 65) + 40;
    var countDownAmount = seconds * 1000; // ms
    var countDownEnd = startTime + countDownAmount;
    var frameCount = 0;

    window.startTime = startTime;
    window.seconds = seconds;
    window.frameCount = frameCount;
    window.countDownAmount = countDownAmount;
    window.countDownEnd = countDownEnd;
    window.frameCount = frameCount;

}