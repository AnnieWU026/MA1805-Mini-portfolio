let apples = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  ellipseMode(CENTER);

  for (let i = 0; i < 10; i++) {
    apples.push({
      x: random(width),  
      y: random(-200, 0),
      size: random(30, 50),
      speed: random(1, 4)     
    });
  }
}

function draw() {
  background(50, 100, 200);

  for (let apple of apples) {
    drawApple(apple.x, apple.y, apple.size);

    apple.y += apple.speed;

    if (apple.y > height + apple.size) {
      apple.y = random(-100, -20);
      apple.x = random(width);
      apple.speed = random(1, 4);
      apple.size = random(30, 50);
    }
  }
}


function drawApple(x, y, size) {

  fill(255, 0, 0);
  ellipse(x, y, size, size * 0.9);

  stroke(100, 50, 0);
  strokeWeight(3);
  line(x, y - size * 0.5, x, y - size * 0.8);
  noStroke();

  fill(0, 200, 0);
  ellipse(x + size * 0.2, y - size * 0.7, size * 0.3, size * 0.15);
}
