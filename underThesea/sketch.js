function preload(){
  underWater = loadImage ("assets/underWater.jpg");
  oct = loadImage ("assets/oct.png");

}

function setup() {
  background (0);
  createCanvas (1000,800);
  
}

function draw() {
  
  image(underWater,0,0);
  noCursor();
  image(oct,mouseX,mouseY);
  
}
