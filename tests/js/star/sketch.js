function setup() {
  createCanvas(400, 400);
}

function draw() {
  coordinateMode(BOTTOM_LEFT);

  background("black");
  drawTickAxes();
  fill("hotpink");
  star(100, 120, 69);

  coordinateMode(TOP_LEFT);
  star(300, 120, 69);
}
