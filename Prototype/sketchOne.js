var circles = []; // create an array to hold the DrawCircle objects

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // circles[0] = new DrawCircle(320, 50, 180, 'red', 1);
  // circles[1] = new DrawCircle(120, 100, 100, 'green', 0.5);
  // print(circles);
  
  // create and initialize the instances of the DrawCircle object
  // populate the circles array with all the instances.
  for (var i = 0; i < 10; i++) {	// i = number of circles drawn
    var x = random(width);
    var y = random(height/3);
    var d = random(20, 150);
    var c = color(random(255), random(255), 255);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }
} 

function draw() { 
  background(220);
  // calling the methods of the drawCircle object
  // circles[0].move();
  // circles[0].display();
  // circles[1].move();
  // circles[1].display();
  
  // iterate over the circles array and call the methods of the DrawCircle object
  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
  }
  
  // keep the number of circles on the canvas under 60
  if (circles.length > 60) {
  	circles.shift();
  }
  
}

function mousePressed() {
  // click the mouse to create a new DrawCircle object and add it to the circles array
  var d = random(20, 150);
  var c = color(random(255), 240, random(255));
  var s = random(0.2, 3);
	var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  circles.push(newCircle);
}

// *** DrawCircle object *** //
// --- parameters --- //
// x 			-> circle - x position (center)
// y 			-> circle - y position (center)
// d 			-> circle - diameter
// c 			-> circle - fill color
// s			-> circle - speed 
function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // *** Method: display the circle on the canvas *** 
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    
    // uncomment the lines below and start building your own shape here!
    // rect(this.xPos,this.yPos, this.diameter/2, this.diameter);
    // stroke(0);
    // strokeWeight(this.diameter/6);
    // point(this.xPos, this.yPos);
  },
  
  // *** Method: move the circle downwards ***
  move: function() {
		this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}