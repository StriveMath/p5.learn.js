from p5 import *

# global teapot


# def preload():
# global teapot
# teapot = loadModel('assets/teapot.obj', True)


def setup():
  global teapot
  # print(pInst)
  createCanvas(400, 400, WEBGL)
  # background('black')
  teapot = loadModel('assets/teapot.obj', True)


def draw():
  coordinateMode(TOP_LEFT)
  model(teapot)
  # background('black')
#   drawTickAxes()

#   fill('hotpink')
#   circle(200, 200, 50)
