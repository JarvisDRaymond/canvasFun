export default class Layer {
    constructor(image, speedModifier) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.gameSpeed =5,
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = this.gameSpeed * this.speedModifier;        
    }
    update() {
        this.speed = this.gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
       
        this.x = Math.floor(this.x - this.speed)
        
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.x+this.width, this.y, this.width, this.height)
    }
    render() {
        this.update();
        this.draw();
    }
}
