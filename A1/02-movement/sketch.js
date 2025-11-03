let x = 0; 
let y = 0; 
let lines = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}
 
function draw() {
  // background(255,0,100); 
  
  // Draw a circle 
  let x1 = random(width);  
  let y1 = random(height); 
  // let x1 = mouseX; 
  // let x1 = mouseX; 
  let x2 = random(width);
  let y2 = random(height);
  let color = random(100,155);
  stroke(color);
  circle(x1, y1, x2, y2); 
  // fill(255, 255, 255, 20); // Sets transparency 
  // ellipse(x1, y1, x2, y2); // Random  sized shape 
  
  // Write some text 
  let myText = "happy"; 
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2);
  lines++;

  // Write some text 
  let Text = "one "; 
  fill(255);
  textSize(width/10);
  textAlign(CENTER, CENTER);
  text(Text, width/3, height/3);
  lines++;

   // Write some text 
  let text1 = "day "; 
  fill(155);
  textSize(width/15);
  textAlign(CENTER, CENTER);
  text(text1, width/1.5, height/1.5);
  lines++;
}
