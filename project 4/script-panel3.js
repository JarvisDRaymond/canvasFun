/** @type {HTMLCanvasElement} */
// From 1:58
(
  () => {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = (canvas.width = 250);
    const CANVAS_HEIGHT = (canvas.height = 700);
    let gameSpeed = 5;
    const enemiesArr = [];
    const numEnemies = 10;

    let gameFrame = 0;

    class Enemy {
      constructor() {
        this.enemyImage = new Image();
        this.enemyImage.src = "enemy3.png";
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 4;
        this.height = this.spriteHeight / 4;
        this.x = Math.random() * (CANVAS_WIDTH - this.width);
        this.y = Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame = 1;
        this.speed = Math.floor(Math.random() * 2 + 1);
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 2 + 0.5;
        this.curve = Math.random() * 200 + 10;
      }
      update() {
        // SIN and COS complement each other to create a circular path
        this.x =
          (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 180) +
          canvas.width / 2 -
          this.width / 2;

        this.y =
          (canvas.width / 2) * Math.cos((this.angle * Math.PI) / 180) +
          canvas.height / 2 -
          this.height / 2;

        this.angle += this.angleSpeed;
        if (gameFrame % this.flapSpeed === 0) {
          this.frame > 4 ? (this.frame = 0) : this.frame++;
        }
      }
      draw() {
        ctx.drawImage(
          this.enemyImage,
          this.frame * this.spriteWidth,
          0,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }
    }
    for (let i = 0; i < numEnemies; i++) {
      enemiesArr.push(new Enemy());
    }

    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      enemiesArr.forEach((enemy) => {
        enemy.update();
        enemy.draw();
      });
      gameFrame++;
      requestAnimationFrame(animate);
    };

    window.addEventListener("load", () => animate());
  }
)();
