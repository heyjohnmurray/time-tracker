var timerOutput = document.querySelector('.js-time-output');
var playBtn = document.querySelector('.js-play');
var pauseBtn = document.querySelector('.js-pause');
var stopBtn = document.querySelector('.js-stop');

function currentTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours();

  timerOutput.innerHTML = seconds;
  console.log(seconds);
}

setInterval(function() {
  currentTime();
}, 1000);

playBtn.addEventListener('click', function() {});
