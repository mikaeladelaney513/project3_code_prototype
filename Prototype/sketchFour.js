// https://editor.p5js.org/crhallberg/sketches/r14Di8RnQ

var circles = [];
let r, g, b;
  
  function setup() {
    createCanvas (1000, 500);
    background(0,0,0);
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  function draw() {
    fill(r, g, b);
    var index = 0;
    while(index < circles.length) {
      ellipse(circles[index].x, circles[index].y, circles[index].d);
        index += 1;
    }
    if (mouseIsPressed) {
      // add a circle where the mouse is
      // not this: ellipse(mouseX, mouseY, 10);
      circles[circles.length] = { x: mouseX, y: mouseY, d: 50 };
    }
  }