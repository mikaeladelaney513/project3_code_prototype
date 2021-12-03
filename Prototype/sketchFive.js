var c;
let value = 0;

function setup() {
  createCanvas(1000, 500);
  background(0);
  c = 0;
}

function draw() {
    ellipse(mouseX, mouseY,100,100);
    if (mouseIsPressed) {
        c = c + 1;
    }
  
  if (c % 2 == 0) {
    fill(255,0,0);
  } else {
    fill(0,255,0);
  }  
}

