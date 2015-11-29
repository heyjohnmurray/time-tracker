// should be some sort of counting logic
// setTimeOut to always update the seconds/minutes/hours
// function to write updated time to the DOM
// find a way to add a description to and save timed sessions

(function(undefined){
  var playBtn = document.querySelector('.js-play');
  var pauseBtn = document.querySelector('.js-pause');
  var stopBtn = document.querySelector('.js-stop');

  playBtn.addEventListener('click', function(e) {
    console.log('play');
  });

  pauseBtn.addEventListener('click', function(e) {
    console.log('pause');
  });

  stopBtn.addEventListener('click', function(e) {
    console.log('stop');
  });

  function TrackerController() {
    console.log('tracker controller');
  }

  function TrackerUI() {
    this.TrackerController = new TrackerController();
    console.log('tracker UI');
  }

  var timeTracker = new TrackerUI();
})();
