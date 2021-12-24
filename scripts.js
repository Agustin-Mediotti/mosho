const player = document.getElementById("player");
const obstacle_sm = document.getElementById("obstacle_small");
const playerMove = document.getElementById("playerImg");
const buttonPlayStop = document.getElementById("buttonPlayStop");
const backgroundSky = document.getElementById("sky");
const backgroundGrass = document.getElementById("grass");
const board = document.getElementById("board");
const music = document.querySelector("#music");
const jmpSound = document.querySelector("#jump");

music.loop = true;

let scoreInterval;
let score = 10.000;



function playerJump() {

    // MOVING AND JUMPING


    board.addEventListener("click", function() {
        playerMove.classList.remove("playerMove");
        player.classList.add("playerJump");
        jmpSound.play();
    });

    player.addEventListener("animationend",() => {
        player.classList.remove("playerJump");
        playerMove.classList.add("playerMove");
    });
}

function removeJump() {
    player.addEventListener("animationend",() => {
        player.classList.remove("playerJump");
        playerMove.classList.add("playerMove");
    });
}


// BUTTON

function pauseGame() {
    obstacle_sm.style.animationPlayState = 'paused';
    playerMove.style.animationPlayState = 'paused';
    backgroundSky.style.animationPlayState = 'paused';
    backgroundGrass.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    music.pause();
    stopScore();
}

function resumeAnimation() {
    obstacle_sm.style.animationPlayState = 'running';
    playerMove.style.animationPlayState = 'running';
    backgroundSky.style.animationPlayState = 'running';
    backgroundGrass.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    resumeScore();
    music.play();

    playerJump();

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

// START

pauseGame();

// RESTART

function restartGame() {
    resetScore();
    removeJump();
}

function resetScore() {
    score = 0;
    document.getElementById("score").innerText = score;
}