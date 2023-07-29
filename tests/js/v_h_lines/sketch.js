function setup() {
  coordinateMode(BOTTOM_LEFT);
  createCanvas(800, 800);
}

let x = 0;

function draw() {
  background("black");
  strokeWeight(5);
  stroke("red");

  let x = bounce(0, width, 5);
  let y = bounce(0, height, 12);
  table("x", x);
  table("y", y);

  if(x > 400){
    noLoop()
  }

  circle(x, y, 10);
  drawTickAxes();
}