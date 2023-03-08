
function setup() {
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400, WEBGL)
}

function draw() {
  background('black')
  orbitControl()
  draw3DAxes(100)
}