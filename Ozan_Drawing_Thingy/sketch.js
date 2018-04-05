var colors_1, colors2, colors3, size;

function setup() {
  createCanvas(900, 900);
  background(255, 255, 255);
  
  colors_1 = createSlider(0, 255, 255 ); colors_2 = createSlider(0, 255, 255 / 2); colors_3 = createSlider(0, 255, 25 / 2);
  size = createSlider(0, 100, 100 / 2);
 
}

function draw() {
 if(mouseIsPressed === true) {
  noStroke();
  fill(colors_1.value(), colors_2.value(), colors_3.value())
  ellipse(mouseX, mouseY, size.value(), size.value());
 }
 if(keyIsPressed === true) {
  background(255, 255, 255)
 }
}