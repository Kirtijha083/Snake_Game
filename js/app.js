// Game Constants & Variables

let inputDir = { x: 0, y: 0 }; //starting position of snake
const foodSound = new Audio("assets/music/food.mp3");
const gameOverSound = new Audio("assets/music/gameover.mp3");
const moveSound = new Audio("assets/music/move.mp3");
const musicSound = new Audio("assets/music/music.mp3");

let speed = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }]; //head of snake

// major component in any game is game loop....ki page barr barr render hota h...isko set-timeout se v kr sakte h....
//but animations ko render krne me highly recomended ki... window.requestAnimationFrame(main) isko use kre
// Why should I use requestAnimationFrame rather than setTimeout or setInterval?
// Use `requestAnimationFrame` because it syncs with the browser’s refresh rate, making animations smoother and more efficient than `setTimeout` or `setInterval`.

// Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime)

  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return; //render nothing when true
  }
  lastPaintTime = ctime; //when false then update
  gameEngine();
}

function gameEngine() {
  // Part 1: Updating the snake array & Food

  // Part 2: Display the snake and food
 // Display the snake
 board.innerHTML = "";
 snakeArr.forEach((e, index)=>{
     snakeElement = document.createElement('div');
     snakeElement.style.gridRowStart = e.y;
     snakeElement.style.gridColumnStart = e.x;

     if(index === 0){
         snakeElement.classList.add('head');
     }
     else{
         snakeElement.classList.add('snake');
     }
     board.appendChild(snakeElement);
 });


  // Display the food
  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food')
  board.appendChild(foodElement);

  
}



// main logic starts here
window.requestAnimationFrame(main);