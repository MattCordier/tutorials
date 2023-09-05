const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
console.log(ctx)

// Set canvas dimensions
// canvas.width = 200;
// canvas.height = 400;

// fillRect()
ctx.fillStyle = 'green';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'purple';
ctx.strokeRect(20, 150, 150, 100);

// clearReact()
ctx.clearRect(25, 25, 100, 20);

// fillText()
ctx.font = '30px Ariel'
ctx.fillStyle = 'red';
ctx.fillText('Hello World', 400, 50);

// strokeText()
ctx.lineWidth = 1
ctx.strokeStyle = 'orange';
ctx.strokeText('Hello World', 400, 100);