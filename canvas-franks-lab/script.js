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

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(100, 100, 27, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(225, 100, 50, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.arc(225, 100, 30, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(225, 100, 27, 0, Math.PI * 2);
ctx.fill();

