function setup(){
    coordinateMode(BOTTOM_LEFT)
    createCanvas(400, 400);
}


function draw(){
    background("black")
    drawTickAxes()
    crosshair("white",1, 20)
}