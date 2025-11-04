let img;
let sound;

function preload() {
img = loadImage('puzzle.webp')
sound = loadSound('person-walking-in-forest-loop-419565.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  sound.loop();
}

function draw() {
  background(0, 20); 

  let x = width / 2 + random(-10, 10);
  let y = height / 2 + random(-10, 10);

  let s = 400 + sin(frameCount * 0.05) * 30;

  image(img, x, y, s, s);

  if (random(1) < 0.05) {
    fill(255, 0, 0, 50);
    rect(0, 0, width, height);
  }
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
