from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)

def draw():
  background('black')
  drawTickAxes()
  fill('hotpink')
  
  circle(bounce(0, 200, 10), 350, 50)
  circle(bounce(0, 200, 5), 250, 50)
  circle(bounce(200, 0, 5), 150, 50)
  circle(bounce(0, 100, 5), 50, 50)

  circle(wave(200, 400, 10), 350, 50)
  circle(wave(200, 400, 5), 250, 50)
  circle(wave(400, 200, 5), 150, 50)
  circle(wave(200, 300, 5), 50, 50)
