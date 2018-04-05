var x = { one: 250, two: 250, three: 250, four: 250 };
var y = { one: 250, two: 250, three: 250, four: 250 };

var speed_X = 5; var speed_Y = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 255, 255);
  

  noStroke(); fill(0, 0, 255); ellipse(x.one, y.one, 50, 50); fill(255, 0, 0); ellipse(x.two, y.two, 50, 50); fill(0, 255, 0); ellipse(x.three, y.three, 50, 50); fill(255, 255, 0); ellipse(x.four, y.four, 50, 50);
  
  x.one += speed_X; y.two += speed_Y; x.three -= speed_X; y.four -= speed_Y;
  
  if(x.one > 475 && x.three < 25) { speed_X = -5; }
  if(x.one < 25 && x.three > 475) { speed_X = 5; }
  if(y.two > 475 && y.four < 25) { speed_Y = -5; }
  if(y.two < 25 && y.four > 475) { speed_Y = 5; }
}