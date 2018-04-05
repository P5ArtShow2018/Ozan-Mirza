var leonidas = undefined;

alert("Move Your Mouse Under The Film!!")

function setup() {
 leonidas = createVideo('300 Final Fight Sequence (Death of Leonidas).mp4');
 leonidas.loop();
 // setTimeout(10000, draw());
}

function draw() {
 createCanvas(800, 800);
 background(255, 255, 255);
 textSize(25);
 text("The movie 300 demonsrated that war is horrific ", mouseX, mouseY);
 text("and treacherous and causes people to suffer", mouseX, mouseY + 25);
 text("Support wounded warriors project", mouseX, mouseY + 50);
 text("to help the soldiers that risked their lives for us", mouseX, mouseY + 75)
 text("https://www.woundedwarriorproject.org", mouseX, mouseY + 100);
}