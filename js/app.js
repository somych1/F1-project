const $ctx = $("#canvas")[0].getContext("2d");
class Car {
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		// this.picture = new Image();
		// this.picture.src = image;
	}
	draw (){
		$ctx.rect(this.x, this.y, this.width, this.height);
		$ctx.fillStyle = '#ff0000';
		$ctx.fill();
	}
}
const player = new Car(328, 820, 110, 150);
player.draw()

$(document).on("keydown", function(e) {
	const key = e.keyCode
	const move = 5;
	if(key == 37) {
		console.log('left')
		player.x = player.x - move
	}
	else if(key == 39) {
		console.log('right')
		player.x = player.x + move 
	}
	$ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.draw()
})