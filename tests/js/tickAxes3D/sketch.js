function setup() {
  createCanvas(400, 400, WEBGL);
  coordinateMode(BOTTOM_LEFT);
}

function draw() {
  orbitControl();
  background("black");
  drawTickAxes();
  fill("hotpink");
  circle(200, 100, 50);
}
