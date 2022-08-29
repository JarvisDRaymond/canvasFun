import Layer from "./Layer.js";


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5; 

const backgroundLayer1 = new Image();
backgroundLayer1.src = "layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "layer-5.png";

const layer1 = new Layer(backgroundLayer1, 0.05);
const layer2 = new Layer(backgroundLayer2, 0.35);
const layer3 = new Layer(backgroundLayer3, 0.55);
const layer4 = new Layer(backgroundLayer4, 0.75);
const layer5 = new Layer(backgroundLayer5, 1.25);

const gameObjects = [layer1, layer2,layer3,layer4,layer5];

const animate = () => {  
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(obj=>obj.render());
    requestAnimationFrame(animate);
}

window.addEventListener('load', ()=> (
    animate())
);
