var 
    height = 0,
    width = 0,
    speed = 2,
    friction = 0.98,
    keys = [];

function update() {

    if (keys[38]) {
        if (player1.height > -speed) {
            player1.height--;
        }
    }

    if (keys[40]) {
        if (player1.height < speed) {
            player1.height++;
        }
    }
    if (keys[39]) {
        if (player1.width < speed) {
            player1.width++;
        }
    }
    if (keys[37]) {
        if (player1.width > -speed) {
            player1.width--;
        }
    }
    $ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer(player1);
    setTimeout(update, 10);
}

function updatePlayer(player) {
    player.height *= friction;
    player.y += player.height;
    player.width *= friction;
    player.x += player.width;

    if (player.x >= 490) {
        player.x = 490;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if (player.y > 990) {
        player.y = 990;
    } else if (player.y <= 0) {
        player.y = 0;
    }

    ctx.fillStyle = player.color;
    player.draw()
}

update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});