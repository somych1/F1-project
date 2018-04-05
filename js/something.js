collisionDetection(){
    if(game.player.x > this.x && game.player.x < this.width && game.player.y > this.y && game.player.y < this.height)
        console.log('accident')
}


// The x position of the ball is greater than the x position of the brick.
// The x position of the ball is less than the x position of the brick plus its width.
// The y position of the ball is greater than the y position of the brick.
// The y position of the ball is less than the y position of the brick plus its height.