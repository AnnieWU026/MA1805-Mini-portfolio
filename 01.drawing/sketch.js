function setup() {
  createCanvas(600, 400);
  noLoop();
  angleMode(DEGREES);
  background(135, 206, 235); 

  drawCloud(150, 80, 40);
  drawCloud(400, 60, 50);

  
  drawSunflower(200, 250, 60);
  drawSunflower(400, 250, 80);
}

function drawSunflower(x, y, size) {
  push();
  translate(x, y);

 
  fill(34, 139, 34); 
  rect(-5, 0, 10, 100);

 
  fill(255, 215, 0); 
  noStroke();
  for (let i = 0; i < 20; i++) {
    push();
    rotate(i * 18);
    ellipse(0, -size / 1.5, size / 3, size);
    pop();
  }

  fill(139, 69, 19);
  ellipse(0, 0, size, size);
  pop();
}

function drawCloud(x, y, s) {
  noStroke();
  fill(255); 
  ellipse(x, y, s * 2, s);
  ellipse(x + s, y + 10, s * 1.8, s);
  ellipse(x - s, y + 10, s * 1.6, s * 0.9);
}

