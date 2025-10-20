function setup() {
    createCanvas(400, 400);
    }
    function draw() {
    background(220);
   
    if(select==0){
        rgb=[255,0,0]
    }else{
        rgb=[0,255,0]
    }
    
    fill(rgb)
let i = 1;
while (i < 10) {
    let r=random(50);
    circle(i,r+300,r);
    i++;
}
textSize(30);
text(select,50,50)
    }

function mousePressed(){
    if(select==0){
        select=1
    }else{
        select=0
    }
}
