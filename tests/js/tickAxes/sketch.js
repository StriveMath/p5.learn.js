function setup() {
  createCanvas(400, 400);
  coordinateMode(BOTTOM_LEFT)
}

function draw() {
  background("black");
  drawTickAxes()
  fill('hotpink')
  circle(200, 100, 50)
}