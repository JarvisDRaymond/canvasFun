/** @type {HTMLCanvasElement} */
// From 1:52
(
  () => {
    const canvas = document.getElementById("canvas2");
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
        this.enemyImage.src = "enemy2.png";
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 4;
        this.height = this.spriteHeight / 4;
        this.x = Math.random() * (CANVAS_WIDTH - this.width);
        this.y = Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame = 1;
        this.speed = Math.floor(Math.random() * 2 + 1);
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 3;
      }
      update() {
        this.x -= this.speed;
        if (this.x + this.width < 0) this.x = CANVAS_WIDTH - this.width;
        this.y += this.curve * Math.sin(this.angle);
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
