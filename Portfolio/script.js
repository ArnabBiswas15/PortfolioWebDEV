
/*score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.KeyCode)
    if (e.KeyCode == 64) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }

    if (e.KeyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.KeyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetX = Math.abs(dy - oy);
    //console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + Score
}
*/

// Jump function
function jump() {
    isJumping = true;
    let position = 0;
    let jumpInterval = setInterval(function()) {
      // Move up
      if (position === 150) {
        clearInterval(jumpInterval);
        let fallInterval = setInterval(function() {
          // Move down
          if (position === 0) {
            clearInterval(fallInterval);
            isJumping = false;
          } else {
            position -= 30;
// Jump function
function jump() {
    isJumping = true;
    let position = 0;
    let jumpInterval = setInterval(function() {
      // Move up
      if (position === 150) {
        clearInterval(jumpInterval);
        let fallInterval = setInterval(function() {
          // Move down
          if (position === 0) {
            clearInterval(fallInterval);
            isJumping = false;
          } else {
            position += 30;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      }
    }
}
