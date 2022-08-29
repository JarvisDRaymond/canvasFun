/** @type {HTMLCanvasElement} */
// From 2:09
// https://www.youtube.com/watch?v=GFO_txvwK_c&t=110s
// TODO!
(
  () => {
    const canvas = document.getElementById("canvas4");
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
        this.enemyImage.src = "enemy4.png";
        this.spriteWidth = 213;
        this.spriteHeight = 208;
        this.width = this.spriteWidth / 4;
        this.height = this.spriteHeight / 4;
        this.x = Math.random() * (CANVAS_WIDTH - this.width);
        this.y = Math.random() * (CANVAS_HEIGHT - this.height);
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame = 0;
        this.speed = Math.floor(Math.random() * 2 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
      }
      update() {
        if (gameFrame % this.interval === 0) {
          this.newX = Math.random() * (canvas.width - this.width);
          this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
          this.interval = Math.floor(Math.random() * 220 + 50);
          console.log(this.interval);
        }
        let distanceX = this.x - this.newX;
        let distanceY = this.y - this.newY;
        this.x -= distanceX / this.interval;
        this.y -= distanceY / this.interval;

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
