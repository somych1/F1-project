const canvas = document.getElementById('canvas');
const $ctx = canvas.getContext("2d");


const img = [];
const keys = [];
let level = document.getElementById('level');
let score = document.getElementById('score');
let damage = document.getElementById('damage');
level.innerText = 1;
score.innerText = 1;
let scratch = 0;
damage.innerText = 0 + '%';

let direction = 'down';
const playerX = 328;
const carImg = ['cars/blue.png', 'cars/green.png', 'cars/purple.png', 'cars/white.png', 'cars/yellow.png'];
let speed = 3;
let othersCarsSpeed = 10;
let numOfCars = 5;
const removeInstance = function () {
     this.destroy = function () {};
};

//random number btwn 1-4
const randNum = function(num){
	return Math.floor(Math.random() * num)
}

const game = {
	player: {},
	arrOfCars: [],
	
	startGame: function(){
		clearCanvas()
		this.player = new Car(328, 790, 110, 200, "cars/blue.png");
		this.player.draw();
		this.createTraffic()
		speed = 10;
		// othersCarsSpeed = 10;
		numOfCars = 10;
	},

	// create all cars for the round
	createTraffic: function(){
	   	// create car	   
    	const otherCar = new Car(randNum(4) * 150 + 10, -200, 110, 200, carImg[randNum(5)]);
    	this.arrOfCars.push(otherCar);
	},
	checkDeath(){
		if(scratch === 300){
			console.log('dead')
			window.cancelAnimationFrame();
		}
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
		// $ctx.imageSmoothingEnabled = true;
		$ctx.drawImage(this.picture, this.x, this.y, this.width, this.height);
	}
	update() {
    	this.y += othersCarsSpeed;
  	}
  	createNewCar(){
  		if(game.arrOfCars.length % numOfCars ===0){
	    	// othersCarsSpeed += 2;
	        level.innerText ++;
	        numOfCars += 10;
	        speed ++;
	    }
  		if(this.y === 300){
  			game.createTraffic()
  			score.innerText ++;
		    
  		}
  	}
  	collisionDetection(){
  		//front left
	    if(game.player.x > this.x && 
	    	game.player.x < this.x + this.width && 
	    	game.player.y > this.y && 
	    	game.player.y < this.y + this.height){
	    	scratch += 1;
	    	damage.innerText = Math.round(scratch * 100 / 300) + '%';
	    	// game.startGame()
	    	game.player.x += 3;
	    	game.player.y += 3;

		}
		//front right
		if(game.player.x + game.player.width > this.x && 
	    	game.player.x + game.player.width < this.x + this.width && 
	    	game.player.y > this.y && 
	    	game.player.y < this.y + this.height){
	    	scratch += 1;
	    	damage.innerText = Math.round(scratch * 100 / 300) + '%';
	    	game.player.x -= 3;
	    	game.player.y += 3;

		} 
		// rear right
		if(game.player.x < this.x && 
			game.player.x + game.player.width > this.x && 
			game.player.y < this.y && 
			game.player.y + game.player.height > this.y){
	    	scratch += 1;
	    	damage.innerText = Math.round(scratch * 100 / 300) + '%';
	    	game.player.x -= 3;
	    	game.player.y -= 3;

		} 
		// rear left
		if(game.player.x > this.x && 
			game.player.x < this.x + this.width && 
			game.player.y < this.y && 
			game.player.y + game.player.height > this.y){
	    	scratch += 1;
	    	damage.innerText = Math.round(scratch * 100 / 300) + '%';
	    	game.player.x += 3;
	    	game.player.y -= 3;


		}
	}
}

// game.startGame()

function clearCanvas(){
	$ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const animate = () => {

	clearCanvas();
	game.player.draw();
	game.arrOfCars.forEach(function(otherCar) { //<-- move something like this to animate (you will update their location each animation frame)
        otherCar.update();
        otherCar.createNewCar();
        otherCar.collisionDetection();
    });
	game.arrOfCars.forEach(function(otherCar) { //<-- move something like this to animate (you will draw each car each animation frame)
        otherCar.draw();
	});
	game.checkDeath()

	requestAnimationFrame(animate); // this will happen 60 times / sec
}
// animate();
canvas.addEventListener('click', (e) => {
	e.currentTarget
	game.startGame()
	animate()
})
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




	

