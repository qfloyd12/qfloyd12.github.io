const container = document.querySelector('.container');
const ball = document.querySelector('.ball');
const startStopBtn = document.getElementById('startStopBtn');

let movingDown = true;
let intervalId = null;

function moveBall() {
  const containerHeight = container.clientHeight;
  const ballHeight = ball.clientHeight;
  const ballPosition = parseInt(ball.style.top) || 0;

  if (movingDown) {
    if (ballPosition + ballHeight >= containerHeight) {
      movingDown = false;
    } else {
      ball.style.top = ballPosition + 1 + 'px';
    }
  } else {
    if (ballPosition <= 0) {
      movingDown = true;
    } else {
      ball.style.top = ballPosition - 1 + 'px';
    }
  }
}

function toggleAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startStopBtn.textContent = 'Start';
  } else {
    intervalId = setInterval(moveBall, 10);
    startStopBtn.textContent = 'Stop';
  }
}

startStopBtn.addEventListener('click', toggleAnimation);




