
function setup() {
  coordinateMode(BOTTOM_LEFT)
  createCanvas(800,800)
}

function draw() {
  background('black')
  strokeWeight(5)
  stroke("red")
  verticalLine(100)
  horizontalLine(500)
  drawTickAxes()
}