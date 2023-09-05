const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
console.log(ctx)

// Set canvas dimensions
// canvas.width = 200;
// canvas.height = 400;

// // fillRect()
// ctx.fillStyle = 'green';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'purple';
// ctx.strokeRect(20, 150, 150, 100);

// // clearReact()
// ctx.clearRect(25, 25, 100, 20);

// // fillText()
// ctx.font = '30px Ariel'
// ctx.fillStyle = 'red';
// ctx.fillText('Hello World', 400, 50);

// // strokeText()
// ctx.lineWidth = 1
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World', 400, 100);

// Paths

// Triangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// ctx.closePath();
ctx.fillStyle = 'coral'
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

// Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = 'teal'
ctx.fill();