const countDownElm = document.querySelector(".count-down");
const body = document.querySelector("body");
let seconds = 5;

function countDown() {
  countDownElm.innerHTML = seconds;
  if (seconds === 0) {
    body.style.backgroundColor = getRandomColor();
    seconds = 5;
  } else {
    seconds--;
  }
}

setInterval(countDown, 1000);

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
