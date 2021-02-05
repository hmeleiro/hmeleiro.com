var beep = new Audio('sounds/beep-02.mp3');
var buzz = new Audio('sounds/beep-05.mp3');

//var seconds = Math.floor(Math.random() * 10) + 1;
var seconds = 10;

//$seconds = document.querySelector('#counter');

var countDown = function() {
    //$seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
    if (seconds-- > 0) {
        setTimeout(countDown, 1000);
        beep.play();
        console.log(seconds)

    } else {
        buzz.play();
        //$seconds.textContent = "Fin del tiempo";

    }

}