var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore() {
  score += 10;
  document.getElementById("scoreval").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").textContent = hitrn;
}

function MakeBubble() {
  var clutter = "";
  var pbottom = document.getElementById("pbottom");
  // <div class="bubble">5</div>
  for (var i = 1; i <= 100; i++) {
    hitrn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${hitrn}</div>`;
  }
  pbottom.innerHTML = clutter;
}

function runTimer() {
  var newTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(newTimer);
      document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER<h1/>`;
    }
  }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  console.log(Number(dets.target.textContent));
  var clickNum = Number(dets.target.textContent);
  if (clickNum === hitrn) {
    increaseScore();
    MakeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
MakeBubble();
