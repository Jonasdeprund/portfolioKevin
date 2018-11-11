////////
////
//// Intro
////
///////

const boxes = document.querySelectorAll('.box');
const introWrapper = document.querySelector('.wrapper-intro');
const introWidth = introWrapper.offsetWidth;
const introHeight = introWrapper.offsetHeight;
let count = 0;


for(let i = 0; i < boxes.length; i++) {
  let posX = Math.floor(Math.random() * introWidth);
  let posY = Math.floor(Math.random() * introHeight);
  boxes[i].style.left = posX + 'px';
  boxes[i].style.top = posY + 'px';
}


setInterval(function(){
  randomizePosition(count);
  count++;
  if(count >= boxes.length) {
    count = 0;
  }
}, 500);


function randomizePosition(count){
  boxes[count].classList.remove("is-active");
  let posX = Math.floor(Math.random() * introWidth);
  let posY = Math.floor(Math.random() * introHeight);
  boxes[count].style.left = posX + 'px';
  boxes[count].style.top = posY + 'px';
  boxes[count].classList.add("is-active");
}
