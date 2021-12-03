var circles = [];
let value = 0;
  
  function setup() {
    createCanvas (1000,500);
    background(0,0,0);
  }
  
  function draw() {
    // the value depends on the colour
    var index = 0;
    while(index < circles.length) {
      ellipse(circles[index].x, circles[index].y, circles[index].d);
        index += 1;
    }
fill(value);
    // when the mouse is pressed the circles will appear
    if (mouseIsPressed) {
      circles[circles.length] = { x: mouseX, y: mouseY, d: 50 };
    }
  }

  // different keys from a-z change the circles colours
  function keyPressed() {
	if (key === 'a') {
		value = 255;
	  } else if (key === 'b') {
		value = 250;
	  } else if (key === 'c') {
		value = 245;
	  } else if (key === 'd') {
		value = 240;
	  } else if (key === 'e') {
		value = 235;
	  } else if (key === 'f') {
		value = 230;
	  } else if (key === 'g') {
		value = 225;
	  } else if (key === 'h') {
		value = 220;
	  } else if (key === 'i') {
		value = 215;
	  } else if (key === 'j') {
		value = 210;
	  } else if (key === 'k') {
		value = 205;
	  } else if (key === 'l') {
		value = 200;
	  } else if (key === 'm') {
		value = 195;
	  } else if (key === 'n') {
		value = 190;
	  } else if (key === 'o') {
		value = 185;
	  } else if (key === 'p') {
		value = 180;
	  } else if (key === 'q') {
		value = 175;
	  } else if (key === 'r') {
		value = 170;
	  } else if (key === 's') {
		value = 165;
	  } else if (key === 't') {
		value = 160;
	  } else if (key === 'u') {
		value = 155;
	  } else if (key === 'v') {
		value = 150;
	  } else if (key === 'w') {
		value = 145;
	  } else if (key === 'x') {
		value = 140;
	  } else if (key === 'y') {
		value = 135;
	  } else if (key === 'z') {
		value = 130;
	  }
  }

