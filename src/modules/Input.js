export default class InputHandler {
  construtor(mosho) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          //mosho.jump();
          alert("keyUp");
          break;
        case "ArrowDown":
          mosho.crouch();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (mosho.speed < 0) mosho.stop();
          break;
        case "ArrowDown":
          break;
      }
    });
  }
}

/* function pauseGame() {
  obstacle_sm.style.animationPlayState = "paused";
  playerMove.style.animationPlayState = "paused";
  backgroundSky.style.animationPlayState = "paused";
  backgroundGrass.style.animationPlayState = "paused";
  player.style.animationPlayState = "paused";
  music.pause();
  stopScore();
}

function resumeGame() {
  obstacle_sm.classList.add("obstaclesMovement");
  resumeAnimation();
}

function stopScore() {
  clearInterval(scoreInterval);
}

function resumeScore() {
  scoreInterval = setInterval(() => {
    score = score - 0.5;
    document.getElementById("score").innerText = score;
  }, 20000);
}

btn_restart.addEventListener("click", () => {
  restartGame();
});

buttonPlayStop.addEventListener("click", () => {
  if (buttonPlayStop.classList.contains("play")) {
    resumeGame();
  } else {
    pauseGame();
  }
  buttonPlayStop.classList.toggle("play");
});

 */
