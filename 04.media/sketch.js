let img;
let sound;
let started = false;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/26/Doll_face.jpg');
  sound = loadSound('https://cdn.pixabay.com/download/audio/2022/03/15/audio_aa6fbbbd5d.mp3?filename=creepy-background-110086.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0);
  textAlign(CENTER);
  textSize(24);
  fill(255);
  text("start", width/2, height/2);
}

function draw() {
  if (!started) return;

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
  if (!started) {
    started = true;
    sound.loop();
  } else if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
