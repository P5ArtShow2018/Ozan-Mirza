var fonts = []; var sound = undefined;

function preload() {
  fonts[0] = loadFont('FONTS/1.otf'); fonts[1] = loadFont('FONTS/2.otf');
  fonts[2] = loadFont('FONTS/3.otf'); fonts[3] = loadFont('FONTS/4.otf');
  fonts[4] = loadFont('FONTS/5.otf'); fonts[5] = loadFont('FONTS/6.otf');
  fonts[6] = loadFont('FONTS/7.otf'); fonts[7] = loadFont('FONTS/8.otf');
  /*fonts[8] = loadFont('FONTS/9.otf'); fonts[9] = loadFont('FONTS/10.otf');
  fonts[10] = loadFont('FONTS/11.otf'); fonts[11] = loadFont('FONTS/12.otf');
  fonts[12] = loadFont('FONTS/13.otf');*/ sound = loadSound('SOUNDS/AIRPORN.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(random(50, 255), random(50, 255), random(50, 255));
  sound.loop();
}

function draw() { noCursor(); }

function keyPressed() {
 var letter = key;
 var font = floor(random(0, 13));
 if(font === 0) { textFont(fonts[0]); }
 if(font === 1) { textFont(fonts[1]); }
 if(font === 2) { textFont(fonts[2]); }
 if(font === 3) { textFont(fonts[3]); }
 if(font === 4) { textFont(fonts[4]); }
 if(font === 5) { textFont(fonts[5]); }
 if(font === 6) { textFont(fonts[6]); }
 if(font === 7) { textFont(fonts[7]); }
 /*if(font === 8) { textFont(fonts[8]); }
 if(font === 9) { textFont(fonts[9]); }
 if(font === 10) { textFont(fonts[10]); }
 if(font === 11) { textFont(fonts[11]); }
 if(font === 12) { textFont(fonts[12]); }
 if(font === 13) { textFont(fonts[13]); }*/
 textSize(random(10, 70));
 text(letter, random(0, width), random(0, height));
 if(keyIsDown(32) === true) { background(random(0, 255), random(0, 255), random(0, 255)); }
}