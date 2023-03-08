
function setup() {
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)
  frameRate(1)
}

function draw() {
  background('black')
  drawTickAxes()

  let roll = random([1, 2, 3, 4, 5, 6])
  die(roll, 100, 100)

  roll = random([1, 2, 3, 4, 5, 6])
  die(roll, 300, 300, "red", "white")
}