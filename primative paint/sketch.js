// Primative Paint
// Aaren Fladeland
// September 21st, 2023
//
// Extra for Experts:
// -the circle changes size and color randomly

let extracanvas; //global variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  extracanvas = createGraphics(windowWidth, windowHeight); //extra canvas
  extracanvas.clear();
}


function draw(){
  background(255);
  autoArt(); 
  extracanvas.textSize(40); 
  extracanvas.textFont('Times New Roman'); //artist name
  extracanvas.text("Aaren Fladeland",50,50);
  if(key ==="r"){ //color changing
    extracanvas.fill("red");
  }
  if(key==="y"){
    extracanvas.fill("yellow");
  }
  if(key ==="g"){
    extracanvas.fill("green");
  }
  if(key ==="a"){ //extra challenge preview
    fill(255);
    rect(mouseX,mouseY, 50, 70);
  }
  if(key ==="s"){
    fill(255);
    ellipse(mouseX,mouseY, 50);
  }
  if(key ==="d"){
    fill(255);
    triangle(mouseX,mouseY, mouseX-20,mouseY-20, mouseX+20, mouseY-20);
  }
  image(extracanvas, 0,0);
}
function mousePressed(){
  if(key ==="a"){ //extra challenge placing
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
  if(keyCode === 32){ //clean slate
    background(255);
    extracanvas.background(255);
    extracanvas.clear();
  }
}
function autoArt(){
  let r = random(30,80);  //circle random size and color
  fill(random(255),random(255),random(255));
  ellipse(400,400, r);
}