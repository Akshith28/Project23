

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  
  
  fill("white");
  rect(100,150,70,250);
  rect(170,200,80,200);
  rect(250,200,80,200);
  rect(330,100,100,300);
  rect(430,200,80,200);
  rect(510,200,80,200);
  rect(590,150,70,250);
  triangle(135,100,100,150,170,150);
  triangle(380,30,330,100,430,100);
  triangle(625,100,590,150,660,150);
  rect(170,180,160,20);
  rect(430,180,160,20);
}