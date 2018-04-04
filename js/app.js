const canvas = document.getElementById('canvas');
const $ctx = canvas.getContext("2d");


const img = [];
const keys = [];
let level;
let score;
let direction = 'down';
const playerX = 328;
const carImg = ['cars/blue.png', 'cars/green.png', 'cars/purple.png', 'cars/white.png', 'cars/yellow.png'];
let speed = 5
let othersCarsSpeed = 1;
const numOfCars = 10;


//random number btwn 1-4
const randNum = function(num){
	return Math.floor(Math.random() * num)
}

const game = {
	player: {},
	arrOfCars: [],
	
	startGame: function(){
		this.player = new Car(playerX, 790, 110, 200, "cars/blue.png");
		this.player.draw();
		this.createTraffic()
	},

	// create all cars for the round
	createTraffic: function(){
	   	// create car	   
    	const otherCar = new Car(randNum(4) * 150 + 10, -200, 110, 200, carImg[randNum(5)]);
    	this.arrOfCars.push(otherCar);
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
	update() {
    	this.y += othersCarsSpeed;
  	}
}

game.startGame()

function clearCanvas(){
	$ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let time = 0;
const setTimer = function(){
    const timer = setInterval(() => {
        time ++
        if(time % 8 === 0) {;
            game.createTraffic()
        }
     }, 1000);
}

setTimer()

const animate = () => {

	clearCanvas();
	game.player.draw();
	game.arrOfCars.forEach(function(otherCar) { //<-- move something like this to animate (you will update their location each animation frame)
	        otherCar.update();
	    });
	game.arrOfCars.forEach(function(otherCar) { //<-- move something like this to animate (you will draw each car each animation frame)
	        otherCar.draw();
	    });


	// game.otherCar.draw()
	// loop over game.arrOfCars and update and draw each one

	requestAnimationFrame(animate); // this will happen 60 times / sec
}
animate();

function playerControl() {

    if (keys[38]) {
    	game.player.y -= speed
    }

    if (keys[40]) {
    	game.player.y += speed*1.5
    }
    if (keys[39]) {
    	game.player.x +=speed
    }
    if (keys[37]) {
    	game.player.x -= speed;
    }
    $ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    setTimeout(playerControl, 10);
}

function updatePlayer() {
 if (game.player.x >= 480) {
        game.player.x = 480;
    } else if (game.player.x <= 10) {
        game.player.x = 10;
    }

    if (game.player.y > 790) {
        game.player.y = 790;
    } else if (game.player.y <= 10) {
        game.player.y = 10;
    }
}

playerControl();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});




	

