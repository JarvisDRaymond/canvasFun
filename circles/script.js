/** @type {HTMLCanvasElement} */
const intiate = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const CANVAS_WIDTH = (canvas.width = window.innerWidth);
  const CANVAS_HEIGHT = (canvas.height = window.innerHeight);
  let gameSpeed = 5;
  const circlesArr = [];

  class Circle {
    constructor() {
      this.x = Math.random() * CANVAS_WIDTH;
      this.y = Math.random() * CANVAS_HEIGHT;
      this.width = Math.random() * 100;
      this.height = Math.random() * 100;
      this.speedX = Math.random() * 4 - 2;
      this.speedY = Math.random() * 4 - 2;
      this.color =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    }
    update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
      ctx.fill();
      //ctx.fillRect(this.x,this.y,this.width,this.height)
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    }
  }
  for (let i = 0; i < 100; i++) {
    circlesArr.push(new Circle());
  }

  const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    circlesArr.forEach((circle) => {
      circle.update();
      circle.draw();
    });
    requestAnimationFrame(animate);
  };
  animate();
};

const interval = setInterval(() => {
  intiate();
}, 15000);
intiate();
