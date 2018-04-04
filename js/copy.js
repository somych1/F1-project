const canvas = document.getElementById('canvas');
const $ctx = canvas.getContext("2d");


const img = []
const keys = []
let level;
let score;
let direction = 'down';
const playerX = 328;
const carImg = ['cars/blue.png', 'cars/green.png', 'cars/purple.png', 'cars/white.png', 'cars/yellow.png'];
var speed = 5



//random number btwn 1-4
const randNum = function(num){
	return Math.floor(Math.random() * num)
}

const game = {
	player: {},
	arrOfCars: [],
	startGame: function(){
		player = new Car(playerX, 790, 110, 200, "cars/blue.png");
		player.draw();
	}
	
}

class Car {
	constructor(x, y, width, height, image){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.picture = new Image();
		this.picture.src = image;
	}
	draw (){
		$ctx.imageSmoothingEnabled = true;
		$ctx.drawImage(this.picture, this.x, this.y, this.width, this.height);
	}
	
}

game.startGame()

function clearCanvas(){
	$ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const animate = () => {

	clearCanvas();
	player.draw();
	requestAnimationFrame(animate);
}
animate();

function playerControl() {

    if (keys[38]) {
    	player.y -= speed
    }

    if (keys[40]) {
    	player.y += speed*1.5
    }
    if (keys[39]) {
    	player.x +=speed
    }
    if (keys[37]) {
    	player.x -= speed;
    }
    $ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    setTimeout(playerControl, 10);
}

function updatePlayer() {
 if (player.x >= 480) {
        player.x = 480;
    } else if (player.x <= 10) {
        player.x = 10;
    }

    if (player.y > 790) {
        player.y = 790;
    } else if (player.y <= 10) {
        player.y = 10;
    }
}

playerControl();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});




	

