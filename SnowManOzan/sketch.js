function setup() {
  createCanvas(500, 500);
  background(0, 200, 255);
}

function draw() {
  // SnowMan Body
   /* Head */ fill(255, 255, 255); noStroke(); ellipse(width / 2, 150, 50, 50);
   /* Tummy */ fill(255, 255, 255); noStroke(); ellipse(width / 2, 205, 75, 75);
   /* Butt */ fill(255, 255, 255); noStroke(); ellipse(width / 2, 275, 100, 100);
   /* Eyes */ fill(0, 0, 0); noStroke(); ellipse((width / 2) - 12.5, 150 - 7.5, 10, 10); ellipse((width / 2) + 12.5, 150 - 7.5, 10, 10);
   /* Buttons */ fill(0, 0, 0); noStroke(); ellipse(width / 2, 150 + 75, 10, 10); ellipse(width / 2, (150 + 75) - 20, 10, 10); ellipse(width / 2, (150 + 75) - 40, 10, 10);
   /* Nose */ fill(255, 165, 0); noStroke(); triangle(width / 2, 150, width / 2, 150 + 7.5, 225, 150);
   /* Arms */ fill(0, 0, 0); noStroke(); line(width / 2 - 30, (150 + 75) -30, -45, -45);
   /* Landscape */ fill(255, 255, 255); noStroke(); rect(0, 285, 500, 600);
   /* Hat (Part 1) */ fill(0, 0, 0); noStroke(); rect((width / 2) - 35, 125, 65, 5);
   /* Hat (Part 2) */ fill(0, 0, 0); noStroke(); rect((width / 2) -27, 125 - 50, 50, 50);
}