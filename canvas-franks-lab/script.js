const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// View CanvasRenderingContext2D in dev tools
console.log(ctx);


const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    
    drawEyeBall()
})


function drawEyeBall() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(mouse.x, mouse.y, 27, 0, Math.PI * 2);
    ctx.fill();
}


