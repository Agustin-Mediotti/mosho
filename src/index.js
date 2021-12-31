import Mosho from "./modules/Mosho";
import InputHandler from "./modules/Input";

const canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let mosho = new Mosho(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(mosho);

mosho.draw(ctx);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  mosho.update(deltaTime);
  mosho.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/* 
// MUSIC

const music = document.querySelector("#music");
const jmpSound = document.querySelector("#jump");
const hitSound = document.querySelector("#hit");
music.loop = true;

let scoreInterval;
let score = 10;

// RESTART

function restartGame() {
  resetScore();
  removeJump();
  obstacle_sm.classList.remove("obstaclesMovement");
  player.classList.remove("hit");
  player.classList.add("playerMove");
  resumeGame();
  hitSound.pause();

  if (buttonPlayStop.classList.contains("play")) {
    buttonPlayStop.classList.toggle("play");
  }
}

function resetScore() {
  score = 10;
  document.getElementById("score").innerText = score;
}

// COLLISIONS
setInterval(function () {
  if (
    player.getBoundingClientRect().right >=
      obstacle_sm.getBoundingClientRect().left &&
    player.getBoundingClientRect().bottom >=
      obstacle_sm.getBoundingClientRect().top
  ) {
    obstacle_sm.style.animationPlayState = "paused";
    backgroundSky.style.animationPlayState = "paused";
    backgroundGrass.style.animationPlayState = "paused";
    playerMove.style.animationPlayState = "paused";
    music.pause();
    stopScore();

    hitSound.play();

    playerMove.classList.remove("playerMove");
    player.classList.remove("playerJump");
    player.classList.add("hit");
  }
}, 500);

if (score < 9) {
  pauseGame();
  alert("Thanks for Playing! Work on progress");
}
 */
