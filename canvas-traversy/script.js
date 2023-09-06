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

// // Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// // ctx.closePath();
// ctx.fillStyle = 'coral'
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal'
// ctx.fill();

// // Arcs
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // Move to mouth
// ctx.moveTo(centerX + 100, centerY)

// // Draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // Move to left eye
// ctx.moveTo(centerX - 60, centerY - 80)

// // Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2, false);

// // Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80)

// // Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2, false);
// ctx.stroke();

// // ToDo: Curves
// // Quadratic curves have one control point
// // quadraticCurveTo(cp1x, cp1y, x, y)

// // Bezier curves have two control points
// // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  

// Animation 1

// create an object for each element

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5, // increment of movement on x-axis
    dy: 4 // increment of movement on y-axis
};

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle();

    // change position
    circle.x += circle.dx;
    circle.y += circle.dy;

    // detect side walls
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1; //multiplies circle.dx by -1
    }

    // detect top and bottom wall
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1; //multiplies circle.dx by -1
    }
    requestAnimationFrame(update);
}

update();