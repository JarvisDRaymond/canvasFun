const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;
const playerImage = new Image();
playerImage.src = 'shadow_dog.png'

const dropdown = document.querySelector("#animations");
let playerState = "idle";
dropdown.addEventListener('change', (e)=>{
    playerState = e.target.value;
});

let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
    {name:"idle", frames: 7},
    {name:"jump", frames: 7},
    {name:"fall", frames: 7},
    {name:"run", frames: 7},
    {name:"dizzy", frames: 11},
    {name:"sit", frames: 5},
    {name:"roll", frames: 7},
    {name:"bite", frames: 7},
    {name:"ko", frames: 12},
    {name:"getHit", frames: 4},
];
animationStates.forEach((state, index)=>{
    let frames = {loc:[]}
    for (let j = 0; j< state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});





const animate = () => {  
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // How to draw a Rect:
    //ctx.fillRect(100,50,100,100)   
    // drawImage accepts image, source x, source y, 
    // source width, source height, destination x, 
    // destintation y, destintation width, 
    // destination height
    // So arg 1 = image src
    // arg 2,3,4,5 = cropping of image src
    // arg 6,7, 8,9 = Location of image in destination 
    let position = Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;
    let spriteFrameX = spriteAnimations[playerState].loc[position].x;
    let spriteFrameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage,spriteFrameX, spriteFrameY,spriteWidth, 
        spriteHeight, 0,0, spriteWidth, spriteHeight);
    
    gameFrame++;

    requestAnimationFrame(animate);
}
animate();