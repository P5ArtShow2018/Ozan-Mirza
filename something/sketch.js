var img = undefined;
var xpos = undefined; var ypos = undefined;
var xpos_adder = undefined; var xpos_adder = undefined;

function preload() {
 img = loadImage('assests/butterfly.png');
}

function setup() {
 createCanvas(600, 600);
 
 xpos = width / 2; ypos = height / 2;
 xpos_adder = 5; ypos_adder = 5;
}

function draw() {
 background(255, 255, 255);
  image(img, xpos, ypos);
  
  xpos += xpos_adder; ypos += ypos_adder;
  
  if(xpos > 525 || ypos > 525 || xpos === 525 || ypos === 525) { xpos_adder = -5; ypos_adder = -5; }
  if(xpos > 0 || ypos > 0 || xpos === 0 || ypos === 0) { xpos_adder = 5; ypos_adder = 5; }
}