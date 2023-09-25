// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let nodeColors = ["red"];
let colorIndex =0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
initColors();
function draw() {
  background(220);
  renderNodes();
}
function renderNodes(){
  stroke(nodeColors[colorIndex]);
  fill(nodeColors[colorIndex]);
  circle(width / 2,height / 2, 20);
  circle(mouseX, mouseY, 20);
  line(width / 2, height / 2, mouseX, mouseY);

}
function segmantdistance(){

}

function mouseWheel(event){
  print(event.delta);
  if(event.delta < 0){
    colorIndex += 1;
  }
  if(colorIndex > nodeColors.lenght-1){
    colorIndex = 0;
  }
}
function initColors(){
  nodeColors.push(color("red"));
  nodeColors.push(color(200,100,0));
  nodeColors.push(color("blue"));
}