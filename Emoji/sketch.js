var score = 0;

var chroma = { r: undefined, g: undefined, b: undefined, }

var x = undefined; var y = undefined;

function setup() {
  createCanvas(500, 500);
  
  frameRate(10);
  
  chroma.r = 0; chroma.g = 0; chroma.b = 0;
  
  frameRate(1);
}

function draw() {
 
   background(255, 255, 255);
 
 x = random(0, width); y = random(0, height);
 
   chroma.r = random(0, 255); chroma.g = random(0, 255); chroma.b = random(0, 255);
 
  /* Face */ Face();
  /* Eyes (sclera) */ Eyes();
  /* Mouth */ Mouth();
  /* Hat (Bottom) */ Hat();
  if(mouseIsPressed === true) {
   console.log("Your X value is: " + mouseX);
   console.log("Your Y Value is: " + mouseY);
  }
  display_score();
}

function Face() {
 noStroke(); fill(chroma.r, chroma.g, chroma.b); ellipse(x, y, width / 2, height / 2);
}

function Eyes() {
 noStroke(); fill(0);
 ellipse((width / 2) - 40, (height / 2) - 40, x - 175, y - 175); ellipse((width / 2) + 40, (height / 2) - 40, x - 175, y - 175);
}

function Mouth() {
 noStroke(); fill(255, 0, 0); ellipse((width / 2) + 25, (height / 2) + 50, x - 150, y - 100);
}

function Hat() {
 // set all oriented to x and y
 noStroke(); fill(0, 0, 0); triangle(x - 116, y - 148, x + 68, x - 52, y - 52, x + 68);
}

function display_score() {
 textSize(20);
 text(score, 20, 20);
}