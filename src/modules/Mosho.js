export default class Mosho {
  constructor(gameWidth, gameHeigth) {
    this.gameWidth = gameWidth;
    this.width = 150;
    this.heigth = 30;

    this.image = document.getElementById("mosho");
    this.size = 32;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeigth - this.heigth - 10,
    };
  }

  jump() {
    this.speed = -this.maxSpeed;
  }

  crouch() {
    // todo
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size);
  }

  update(deltaTime) {
    this.position.y += this.speed;

    if (this.position.y < 0) this.position.y = 0;

    if (this.position.y + this.heigth > this.gameHeigth)
      this.position.y = this.gameHeigth - this.heigth;
  }

  /* function playerJump() {
  // MOVING AND JUMPING

  canvas.addEventListener("click", function () {
    playerMove.classList.remove("playerMove");
    player.classList.add("playerJump");
    jmpSound.play();
  });

  player.addEventListener("animationend", () => {
    player.classList.remove("playerJump");
    playerMove.classList.add("playerMove");
  });
}

function removeJump() {
  player.addEventListener("animationend", () => {
    player.classList.remove("playerJump");
    playerMove.classList.add("playerMove");
  });
}


function resumeAnimation() {
  obstacle_sm.style.animationPlayState = "running";
  playerMove.style.animationPlayState = "running";
  backgroundSky.style.animationPlayState = "running";
  backgroundGrass.style.animationPlayState = "running";
  player.style.animationPlayState = "running";
  resumeScore();
  music.play();

  playerJump();
}

 */
}

/* this class should contain canvas instanciamient */
