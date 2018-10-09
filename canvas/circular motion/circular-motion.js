var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
	x : innerWidth / 2,
	y : innerHeight / 2
}

window.addEventListener('resize', function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		init();
	});

window.addEventListener('mousemove',
			function(event) {
				mouse.x = event.clientX;
				mouse.y = event.clientY;

			});

function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

var colorArray = [
		'#ffaa33',
		'#99ffaa',
		'#00ff00',
		'#4411aa',
		'#ff1100'
		];

function Particles(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.radians = Math.random() * Math.PI * 2;
	this.velocity = 0.05;
	this.distanceFromCenter =  randomIntFromRange(50, 120);
	this.lastMouse = {x: x, y: y};

	this.update = function() {
		const lastPoint = {x: this.x, y: this.y};

		// move points over time
		this.radians += this.velocity;

		// drag effect
		this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
		this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

		// Circular Motion
		this.x = this.lastMouse.x + Math.cos(this.radians) * 
			this.distanceFromCenter;
		this.y = this.lastMouse,y + Math.sin(this.radians) * 
		this.distanceFromCenter;

		this.draw(lastPoint);
	}

	this.draw = function() {
		c.beginPath();
		c.strokeStyle = this.color;
		c.lineWidth = this.radius;
		c.moveTo(lastPoint.x, lastPoint.y);
		c.lineTo(this.x, this.y);
		c.stroke();
		c.closePath();
	}

}

let particles;
function init() {
	particles = [];

	for(let i = 0; i < 50; i++) {
		const radius = (Math.random() * 2) + 1;
		particles.push(new Particles(canvas.width / 2, canvas.height / 2,
			radius, randomColor(colorArray)));
	}

}

function animate() {
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(255, 255, 255, 0.05)';
	c.fillRect(0, 0, canvas.width, canvas.height);

	particles.forEach(particle => {
		particle.update();
	})

}

init();
animate();
