const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// View CanvasRenderingContext2D in dev tools
console.log(ctx);


const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x, this.y, 7, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function init() {
    for (let i = 0; i < 100; i++){
        particlesArray.push(new Particle())
    }
}
console.log(particlesArray)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
init();
animate();


