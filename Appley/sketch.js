var apple = {i: undefined, x: undefined, y: undefined };
var score = 0;
var yacket = undefined;
bg = {i: undefined, w: 500, h: 500, x: 0, y: 0}
function preload() {
 apple.i = loadImage("Assets/clipart-cartoon-apple-637c.png");
 bg.i = loadImage("Assets/maxresdefault.jpg");
 yacket = loadSound('Assets/-Yakety_Sax-_Music[Mp3Converter.net].mp3');
}

function setup() {
  createCanvas(500, 500);
  //imageMode(CENTER);
  frameRate(10);
  apple.x = width / 2; apple.y = height / 2;
}

function draw() {
 yacket.play();
 if(yacket.stop() === true) {
  yacket.play();
 }
 noStroke();
 background(0); 
 image(bg.i, bg.x, bg.y); 
 bg.i.resize(bg.w, bg.h);
 textSize(20);
 text("Score: " + score, 5, 25);
 ellipse(mouseX, mouseY, 5, 5);
  image(apple.i, apple.x, apple.y);
  apple.x = random(0, width); apple.y = random(0, height);
  collide_detector();
  if(collide_detector() === true) {
   score += 1;
  }
}

function collide_detector() {
 var distX = Math.abs(mouseX - apple.x - apple.w / 2);
 var distY = Math.abs(mouseY - apple.y - apple.h / 2);
 
 if (distX <= (apple.w/2)) { return true; } 
 if (distY <= (apple.h/2)) { return true; }
 
 var dx = distX - apple.w / 2;
 var dy = distY - apple.h / 2;
 return (dx*dx+dy*dy<=(2.5 * 2.5));
}