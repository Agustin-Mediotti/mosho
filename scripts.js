const player = document.getElementById("player");
const obstacle_sm = document.getElementById("obstacle_small");
const playerMove = document.getElementById("playerImg");
const buttonPlayStop = document.getElementById("buttonPlayStop");
const backgroundSky = document.getElementById("sky");
const backgroundGrass = document.getElementById("grass");
const board = document.getElementById("board")

let scoreInterval;
let score = 10.000;

// MOVING AND JUMPING

board.addEventListener("click", function() {
    playerMove.classList.remove("playerMove");
    player.classList.add("playerJump");
});

player.addEventListener("animationend",() => {
    player.classList.remove("playerJump");
    playerMove.classList.add("playerMove");
});

// BUTTON

function pauseGame() {
    obstacle_sm.style.animationPlayState = 'paused';
    playerMove.style.animationPlayState = 'paused';
    backgroundSky.style.animationPlayState = 'paused';
    backgroundGrass.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    stopScore();
}

function resumeAnimation() {
    obstacle_sm.style.animationPlayState = 'running';
    playerMove.style.animationPlayState = 'running';
    backgroundSky.style.animationPlayState = 'running';
    backgroundGrass.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    resumeScore();
}

function resumeGame() {
    resumeAnimation();
}

function stopScore() {
    clearInterval(scoreInterval);
}

function resumeScore() {
    scoreInterval = setInterval(() => {
        score = score - 0.5;
        document.getElementById("score").innerText = score;
    },20000);
}

buttonPlayStop.addEventListener('click', () => {

    if(buttonPlayStop.classList.contains("play")) {
        resumeGame();
    } else {
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
});

// SCORE

scoreInterval = setInterval(() => {
    score = score - 0.5;
    document.getElementById("score").innerText = score;
},20000);


// START

pauseGame();

