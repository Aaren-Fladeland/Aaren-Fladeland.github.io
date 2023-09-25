// p5 drawing basics
// Aaren Fladeland
// Sept 12, 2023
//
// Extra for Experts:
// Driving the bus

let busX = 0, busY = 0;
let groundY = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  drawbus();
  movebus();
}
function drawbus(){
  fill(255);
  rect(50+busX,50+busY,100,50);
  fill(0);
  circle(80+busX,100+busY,20);
  circle(120+busX,100+busY,20);
}
function movebus(){
  if (keyIsPressed){
    if(keyCode===LEFT_ARROW){
      busX = busX - 10;
    }
    if(keyCode===RIGHT_ARROW){
      busX = busX + 10;
    }
    if(keyCode===UP_ARROW){
      busY = busY + 10;
    }
    if(keyCode===DOWN_ARROW){
      busY = busY - 10;
    }
}
}
function drawground(){
  fill(111);
  rect(300+groundY,100,100);
}
function moveground(){
  if (keyIsPressed){
    if(keyCode===UP_ARROW){
      groundY = groundY + 10;
    }
    if(keyCode===DOWN_ARROW){
      groundY = groundY - 10;
    }
  }
}


/*function keyPressed(){
  print ("key: ", key, "\tkeyCode:", keyCode);
  if(keyCode===LEFT_ARROW){
    busX = busX - 10;
  }
  if(keyCode===RIGHT_ARROW){
    busX = busX + 10;
  }
}
*/

