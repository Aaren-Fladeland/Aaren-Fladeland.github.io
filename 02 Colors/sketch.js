// Colors and Canvases
// Aaren Fladeland
// September 13, 2023
//
// Extra for Experts:
// - practice using color variables, layers, animation
let ballX, ballY, ballSize = 30;
let xSpeed = 5, ySpeed = 5;
let overlay;
let colorA = color(128, 20, 190);
let colorB = color("blue");

function keyPressed(){
  if(key ==="a") fill(colorA);
  
  if(key ==="b") fill(colorB);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  ballX = width / 2;
  ballY = height / 2;

}

function draw() {
  background(220);
  moveAndDrawBall();
  drawTriangle();
}
function drawTriangle(){
  overlay.triangle(mouseX, mouseY - 20, mouseX - 10, mouseY + 10, mouseX + 10, mouseY + 10);
  image(overlay,0,0);
}
function moveAndDrawBall() {
  ballX += xSpeed;
  ballY += ySpeed;

  if(ballX<=0 || ballX >=width){
    xSpeed = xSpeed * -1;
  }
  if(ballY<=0 || ballY >=height){
    ySpeed = ySpeed * -1;
  }
  fill(0);
  circle(ballX, ballY, ballSize);

}
