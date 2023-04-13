let button, cl;

function setup() {
  createCanvas(windowWidth, windowHeight);
  coordinateMode(BOTTOM_LEFT);
  button = createButton("click me");
  button.size(100);
  button.position(width / 2, height - 100);
  button.mousePressed(colorChange);
  cl = "black";
}

function draw() {
  background(cl);
  drawTickAxes();
  crosshair();
}

function colorChange(evt) {
  cl = (random(0, 255), random(0, 255), random(0, 255));
}
