const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 20;
const CANVAS_HEIGHT = canvas.height = 20;

let colorMode = 'color';

const changeColorMode = () => {
    if (colorMode === 'color') {
        colorMode = 'BW' 
    }
    else {
        colorMode = 'color';
    }
}

const draw = () => { 
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let x = 0; x < CANVAS_WIDTH; x++) {
        for (let y = 0; y < CANVAS_HEIGHT; y++) {

    if (colorMode === 'color') {
        // random color:
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);    
        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    else {
        // B & W
        if (Math.random()>=0.5 ){
            ctx.fillStyle = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        }
        else {
            ctx.fillStyle = 'rgb(' +255 + ',' + 255 + ',' + 255 + ')';
        }
    }   
    ctx.fillRect(x, y, 1, 1);
    }
}


}
draw();
var intervalId = window.setInterval(function(){
    draw();
  }, 1000);