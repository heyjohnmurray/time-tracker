var timerOutput = document.querySelector('.js-time-output');
var playBtn = document.querySelector('.js-play');
var pauseBtn = document.querySelector('.js-pause');
var stopBtn = document.querySelector('.js-stop');
var time = new Date();
var seconds = 0;
var minutes = 0;
var hours = 0;

function timing() {
  seconds++;

  if(seconds > 60) {
    minutes++;
  }

  timerOutput.innerHTML = minutes + ' : ' + seconds;
}

function timer() {
  setInterval(timing, 1000);
}

playBtn.addEventListener('click', timer);
