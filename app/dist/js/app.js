function timing(){seconds++,timerOutput.innerHTML=seconds}function timer(){setInterval(timing,1e3)}var timerOutput=document.querySelector(".js-time-output"),playBtn=document.querySelector(".js-play"),pauseBtn=document.querySelector(".js-pause"),stopBtn=document.querySelector(".js-stop"),time=new Date,seconds=0,minutes=0,hours=0;playBtn.addEventListener("click",timer);