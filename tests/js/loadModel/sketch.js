let teapot;

function setup() {
  createCanvas(400, 400, WEBGL)
  teapot = loadModel('assets/teapot.obj', true)
}

function draw() {
  model(teapot)
}