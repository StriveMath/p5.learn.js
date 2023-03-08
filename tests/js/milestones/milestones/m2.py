from p5 import *


function setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)


function draw():
  background('black')
  drawTickAxes()
  circle(200, 200, 10)
