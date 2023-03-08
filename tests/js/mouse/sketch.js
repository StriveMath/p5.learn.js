
function setup() {
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)
}

function draw() {
  background('black')

  translate(200, 200)
  rotate(45)
  translate(cos(frameCount) * 100, sin(frameCount * 2) * 100)
  rotate(frameCount)

  drawTickAxes()
  const x = mouse().x
  const y = mouse().y
  circle(x, y, 50)
}