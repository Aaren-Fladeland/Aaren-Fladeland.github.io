// Primative Paint
// Aaren Fladeland
// September 21, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let extracanvas;
let circleSize = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  extracanvas = createGraphics(windowWidth, windowHeight);
  extracanvas.clear();
}


function draw(){
  background(255);
  textSize(40);
  textFont('Times New Roman');
  text("Aaren Fladeland",50,50);
  ellipse(400,400, 25);
  for(let i=0; i < 100; i=i+1){
    extracanvas.ellipse(400,400, i);
  }
  if(key ==="a"){
    rect(mouseX,mouseY, 50, 70);
  }
  if(key ==="s"){
    ellipse(mouseX,mouseY, 50);
  }
  if(key ==="d"){
    triangle(mouseX,mouseY, mouseX-20,mouseY-20, mouseX+20, mouseY-20);
  }
  image(extracanvas, 0,0);
  if(key ==="r"){
    fill("red");
    extracanvas.fill("red");
  }
  if(key ==="y"){
    fill("yellow");
    extracanvas.fill("yellow");
  }
  if(key ==="g"){
    fill("green");
    extracanvas.fill("green");
  }
}
function mousePressed(){
  if(key ==="a"){
    extracanvas.rect(mouseX,mouseY, 50, 70);
  }
  if(key ==="s"){
    extracanvas.ellipse(mouseX,mouseY, 50);
  }
  if(key ==="d"){
    extracanvas.triangle(mouseX,mouseY, mouseX-20,mouseY-20, mouseX+20, mouseY-20);
  } 
}
function keyPressed() {
  if(keyCode === 32){
    background(255);
    extracanvas.background(255);
    extracanvas.clear();
  }
}

