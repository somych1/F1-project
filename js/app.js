const $ctx = $("#my-canvas")[0].getContext("2d");
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