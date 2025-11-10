let size = 50;

function setup(){
   createCanvas(500, 500);
   background(255);
   text("start", width/2, height/2);
}
 
mousePressed() ; {
  if (started) {
    started = true;
    draw ();
  } 
    }
    
  function draw(){
   noFill();
   ellipse(mouseX, mouseY, size, size);
}





