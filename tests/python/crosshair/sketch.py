from p5 import *

def setup():
    coordinateMode(BOTTOM_LEFT)
    createCanvas(400, 400)

def draw():
    background("black")
    drawTickAxes()
    crosshair()