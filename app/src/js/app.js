var timerOutput = document.querySelector('.js-time-output');
var playBtn = document.querySelector('.js-play');
var pauseBtn = document.querySelector('.js-pause');
var stopBtn = document.querySelector('.js-stop');
var time = new Date();
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

function timing() {
  seconds++;

  if (seconds > 60) {
    minutes++;
  }

  if (minutes > 60) {
    hours++;
  }

  timerOutput.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}

function timer() {
  interval = setInterval(timing, 1000);
}

playBtn.addEventListener('click', timer);

pauseBtn.addEventListener('click', function() {
  clearInterval(interval);
});

stopBtn.addEventListener('click', function() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  clearInterval(interval);
  timerOutput.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
});
