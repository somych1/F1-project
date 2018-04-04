const setTimer = function(){
    const timer = setInterval(() => {
        let time = 0;
        time ++
        if(time % 6 === 0) {
            clearInterval(timer);
            game.createTrafic()
        }
     }, 1000);
}