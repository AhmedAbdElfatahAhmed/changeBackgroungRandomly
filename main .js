const countDownElm = document.querySelector(".count-down");
const body = document.querySelector("body");
let seconds = 5;
let backgroundColorList = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "black",
  "blueviolet",
  "brown",
  "chartreuse",
  "crimson",
];
let countDownInternal = setInterval(countDown, 1000);

function countDown() {
  countDownElm.innerHTML = seconds;
  if (seconds >= 0) {
    seconds--;
  } else {
    clearInterval(countDownInternal);
    countDownElm.innerHTML = "background change randomly...";
    countDownElm.style.color = "white";
    setInterval(changeBackgroundRandomly, 500);
  }
}

function changeBackgroundRandomly() {
  let randomIndex = Math.floor(Math.random(backgroundColorList.length) * 10);
  body.style.backgroundColor = backgroundColorList[randomIndex];
}
