const canvas = document.getElementById('canvas');
const $ctx = canvas.getContext("2d");
const img = []
let level;
let score;
let speed = 261;
let direction = 'down';
let playerX = 328;
let moveY = -200;
const trafficCars = [];
const carImg = ['cars/blue.png', 'cars/green.png', 'cars/purple.png', 'cars/white.png', 'cars/yellow.png']
//random number btwn 1-4
const randNum = function(num){
	return Math.floor(Math.random() * num)
}

const game = {
	numberOfCars: 5,
	player: {} ,
	otherCars: [],

	start() {
		//create the player
		game.player = new Car(playerX, 790, 110, 200, "cars/blue.png");

		// cerate the other cars
		for( 1 to numberOfCars) {
			new Car
			otherCars.push()
		}
	},
	// player's car
	drawPlayer: function(){
		// loop over keys
			if keys.right { player.x++}
			if keys.left {player. x --}
		player.draw()
	},
	// traffic
	trafficMove: function(){
		// const comp = new Car(randNum(2)*150+10, moveY, 110, 200, carImg[2])
		for(all the cars) {
			car.draw()
			
			if(speed < 21){         // if speed
				console.log('work')
				moveY += 10
			} else if(speed < 41){
				moveY = moveY + 7
			} else if(speed < 51){
				moveY += 5
			} else if(speed > 51){
				moveY = moveY - 5
			} else if(speed > 71){
				moveY = moveY - 15
			}
		}
	}
	// collisionDetection: function(a, b){ //if all those conditions are met
 //  		if(a.x < b.x + b.width && 
 //  			a.x + a.width > b.x &&
 //  			a.y < b.y + b.height &&
 //  			a.y + a.height > b.y){
 //  			console.log('accident')
 //   		}
	// }
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
		$ctx.imageSmoothingEnabled = false;
		$ctx.drawImage(this.picture, this.x, this.y, this.width, this.height);
	}
	
}

// let player = new Car(328, 790, 110, 200, "cars/blue.png");
// player.draw()


function clearCanvas(){
	$ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$(document).on("keydown", function(e) {
	
	const key = e.keyCode
	const moveX = 15;
	
	if(key == 37 && playerX >= 0 && speed > 0) {
		console.log('left')
		playerX -= moveX
	}

	else if(key == 39 && playerX <= 490 && speed > 0) {
		console.log('right')
		playerX += moveX 
	}

	
	else if(key == 38) {
		console.log(speed + 'speed up')
		if(speed >= 21){
			$('.background').css({
			'animation': 'scroll ' + (speed -= 10) + 's linear 0s infinite reverse none running'
			})
		} else if(speed === 0){
			$('.background').css({
			'animation': 'scroll ' + (speed = 261) + 's linear 0s infinite reverse none running'
			})
		}
		else if(speed < 21){
			$('.background').css({
			'animation': 'scroll ' + (speed = 11) + 's linear 0s infinite reverse none running'
			})
		}
	}
	

	else if(key == 40) {
		console.log(speed + 'slow down')
		if(speed === 0){
			$('.background').css({
			'animation': 'scroll ' + (speed = 0) + 's linear 0s infinite reverse none running'
			})
		}
		else if(speed <= 239){
			$('.background').css({
				'animation': 'scroll ' + (speed += 10) + 's linear 0s infinite reverse none running'
			})
		} else if(speed > 239){
			$('.background').css({
				'animation': 'scroll ' + (speed = 0) + 's linear 0s infinite reverse none running'
			})
		}

	}
})


const animate = () => {

	clearCanvas();
	game.drawPlayer();
	game.trafficMove();
	game.collisionDetection(game.createPlayer, game.trafficMove);
	requestAnimationFrame(animate);
}

game.start();
animate();



// 	keys = {
// 		left: false,
// 		right: false
// 	}
// left.keydown -> keys.left = true
// right.keydown -> keys.right = true
// left.keyup -> keys.left = false
// right.keyup -> keys.right = false
