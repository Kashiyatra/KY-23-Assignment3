const openNavButton = document.querySelector("#open-nav");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("nav");
openNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});
closeNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});


let canvas = document.querySelector('canvas');
let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// Generate random value between two values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Mouse object
let mouse = { x: '', y: ''};

// Assign current mouse position to the mouse object
window.addEventListener("mousemove", (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
});

// On window resize, get the current screen size and initialize the globes
window.addEventListener("resize", () => {
	cw = canvas.width = window.innerWidth;
	ch = canvas.height = window.innerHeight;
	init();
});

// Globe object
function Globe(ox, oy, r, dx, dy, angle, dtheta, particlesArr) {
	this.ox = ox; // Origin x point
	this.oy = oy; // origin y point
	this.r = r; // Radius
	this.dx = dx; // Speed of the globe along the x-axis
	this.dy = dy; // Speed of the globe along the y-axis
	this.angle = angle; // Angle for the gradient shadow
	this.dtheta = dtheta; // Speed of gradient shadow roation
	this.particlesArr = particlesArr; // Particles array
	this.generate = () => {
		// Create circle
		c.beginPath();

		// Change direction of the globe movement
		if(this.ox + this.r > cw || this.ox - this.r < 0) {this.dx = -this.dx}
		if(this.oy + this.r > ch || this.oy - this.r < 0) {this.dy = -this.dy}

		c.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
		c.strokeStyle = '#a17ac2';
		c.shadowColor = '#a17ac2';
		c.shadowBlur = 8;
		c.stroke();
		c.shadowColor = 'transparent';

		// Change direction of gradient shadow rotation 
		if(Math.floor(this.angle) == 120 || Math.floor(this.angle) == 60) { this.dtheta = -this.dtheta };
		this.angle += this.dtheta;

		// Get starting point and oppasite ending point for gradient shadows
		let px1 = this.ox + r*Math.cos(this.angle * Math.PI/180);
		let py1 = this.oy + r*Math.sin(this.angle * Math.PI/180);

		let px2 = this.ox + r*Math.cos((this.angle * Math.PI/180) + Math.PI);
		let py2 = this.oy + r*Math.sin((this.angle * Math.PI/180) + Math.PI);

		// Create gradient shadow
		let linGrd1 = c.createLinearGradient(px2, py2, px1, py1);
		let grdClr1 = '#7e318f';
		linGrd1.addColorStop(0.2, 'transparent');
		linGrd1.addColorStop(0.6, grdClr1+'05');
		linGrd1.addColorStop(0.7, grdClr1+'10');
		linGrd1.addColorStop(0.8, grdClr1+'15');
		linGrd1.addColorStop(0.9, grdClr1+'45');
		linGrd1.addColorStop(1, grdClr1+'75');

		c.beginPath();
		c.arc(this.ox, this.oy, this.r, 0, Math.PI*2);
		c.fillStyle = linGrd1;
		c.fill();

		// Create oppasite gradient shadow
		let linGrd2 = c.createLinearGradient(px1, py1, px2, py2);
		let grdClr2 = '#5a8aa6';
		linGrd2.addColorStop(0.2, 'transparent');
		linGrd2.addColorStop(0.6, grdClr2+'05');
		linGrd2.addColorStop(0.7, grdClr2+'10');
		linGrd2.addColorStop(0.8, grdClr2+'15');
		linGrd2.addColorStop(0.9, grdClr2+'45');
		linGrd2.addColorStop(1, grdClr2+'75');

		c.beginPath();
		c.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
		c.fillStyle = linGrd2;
		c.fill();	

		// Create particles
		let particleClr = ['#84dde5', '#da8fe3', '#fff', 'transparent']
		for(let i=0; i<this.particlesArr.length; i++) {
			c.beginPath();
			c.fillStyle = particleClr[getRandomInt(0, particleClr.length-1)];

			let particleSize = 1.5;
			(cw < 480) ? particleSize = 1: particleSize = 1.5;

			// Change particle movement direction when it reaches the globe edge (If the mouse point is not hovered on a globe and if the particle is not already released)
			if(Math.pow((this.particlesArr[i][0]-this.ox), 2) + Math.pow((this.particlesArr[i][1]-this.oy), 2) > Math.pow(this.r-particleSize, 2)) {
				if(Math.pow((mouse.x - this.ox), 2) + Math.pow((mouse.y - this.oy), 2) > Math.pow(this.r , 2) && this.particlesArr[i][5] != 'released' ) {	
					this.particlesArr[i][2] = -this.particlesArr[i][2];
					this.particlesArr[i][3] = -this.particlesArr[i][3];
				} else {
					// Mark particle as released
					this.particlesArr[i][5] = 'released';

					// Increase the spead of releasing particles
					this.particlesArr[i][0] += 2*this.particlesArr[i][2];
					this.particlesArr[i][1] += 2*this.particlesArr[i][3];
				}
			}

			// Increment particle position
			this.particlesArr[i][0] += this.particlesArr[i][2] + this.dx;
			this.particlesArr[i][1] += this.particlesArr[i][3] + this.dy;

			c.fillRect(this.particlesArr[i][0], this.particlesArr[i][1], particleSize, particleSize);

		}

		// Increment the globe position
		this.ox += this.dx;
		this.oy += this.dy;
	};
}

let globeArray = [];

function init() {
	globeArray = []; // Reset array

	// Set max radius of globes
	let R; 
	(cw < 480) ? R = 70: R = 120;

	// Create globe array with different values
	for (let i = 0; i < 8; i++) {
		let r = getRandomInt(R-40,R); // Radius of globes

		// Define globe origin points
		let ox = getRandomInt(0+R,cw-R);
		let oy = getRandomInt(0+R,ch-R);

		// Get random velocity for the globe
		let dx = (Math.random()-0.5)*2;
		let dy = (Math.random()-0.5)*2;	

		// Get random angle to get random starting point and oppasite ending point for gradient shadows
		let angle = getRandomInt(60,120);

		let dtheta = 0.1; // Speed of gradient shadow rotation

		// Particles with random positions
		let particlesArr = [];
		for (let i = 0; i < 5*r; i++) {
			let rx = getRandomInt(ox-r, ox+r);
			let ry = getRandomInt(oy-r, oy+r);	

			let dx = Math.random()-0.5;
			let dy = Math.random()-0.5;	
			particlesArr.push([rx, ry, dx, dy, '']);

			// Remove particles outside the globe
			if(Math.pow((rx-ox), 2) + Math.pow((ry-oy), 2) >= Math.pow(r, 2)) {
				particlesArr.pop();
			}
		}

		globeArray.push(new Globe(ox, oy, r, dx, dy, angle, dtheta, particlesArr));
	}
}
init();

// Animate function
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0 , cw, ch);

	// Generate globes
	for(let i=0; i<globeArray.length; i++) {
		globeArray[i].generate(i);
	}
	
}

animate();