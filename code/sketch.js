// State Variables and Fading
// Aaren Faldeland
// Date
//
// Extra for Experts:
// - state variables and fading effect
let mouseSide; 
let fillValue = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}
function updateMouseState(){
  if(mouseX > width/2){
    mouseSide="right";
  }
  else mouseSide="left";
  print(mouseSide);
}

function renderSquares(){
  if(mouseSide==="left"){
    fill(0);
  }
  else fill(255);
  rect(0,0,width/2,height);

  if(mouseSide==="right"){
    fillValue = 0;
  }
  else{
    fillValue += 10;
  }
  fillValue = constrain(fillValue,0,255);
  fill(fillValue);
  rect(width/2,0,width/2,height);
}
