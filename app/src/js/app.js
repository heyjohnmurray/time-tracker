// helpful link http://jsfiddle.net/oukjfavu/
// https://s-media-cache-ak0.pinimg.com/236x/ed/18/a6/ed18a6a3e596786e94b8bef70cb25c5f.jpg

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

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }

  timerOutput.innerHTML = (hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);
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
