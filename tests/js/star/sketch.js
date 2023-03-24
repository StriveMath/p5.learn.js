function setup() {
  coordinateMode(BOTTOM_LEFT);
  createCanvas(400, 400);
}

function draw() {
  background("black");
  drawTickAxes();
  fill("hotpink");
  star(100, 120, 69);
}
