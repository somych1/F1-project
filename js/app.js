console.log('F1')

// const canvas = document.getElementById('my-canvas')


// const ctx = canvas.getContext('2d');

// const imageRepository = new function() {
// 	// Define images
// 	this.background = new Image();
// 	// Set images src
// 	this.background.src = "media/background_asphalt.jpg";
// }

// function Drawable() {
// 	this.init = function(x, y) {
// 		// Default variables
// 		this.x = x;
// 		this.y = y;
// 	}
// 	this.speed = 0;
// 	this.canvasWidth = 0;
// 	this.canvasHeight = 0;
// 	// Define abstract function to be implemented in child objects
// 	this.draw = function() {
// 	};
// }
// function Background() {
// 	this.speed = 1; // Redefine speed of the background for panning
// 	// Implement abstract function
// 	this.draw = function() {
// 		// Pan background
// 		this.y += this.speed;
// 		this.context.drawImage(imageRepository.background, this.x, this.y);
// 		// Draw another image at the top edge of the first image
// 		this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);
// 		// If the image scrolled off the screen, reset
// 		if (this.y >= this.canvasHeight)
// 			this.y = 0;
// 	};
// }
// // Set Background to inherit properties from Drawable
// Background.prototype = new Drawable();