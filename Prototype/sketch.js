// https://editor.p5js.org/crhallberg/sketches/r14Di8RnQ

var circles = [
  { x: 100, y: 100, d: 100 },
  { x: 200, y: 50, d: 50 },
  { x: 250, y: 150, d: 50 },
  { x: 200, y: 350, d: 50 },
];

function setup() {
  createCanvas (1000,500);
  background(0,0,0);
}

function draw() {
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