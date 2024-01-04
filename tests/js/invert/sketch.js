
function setup() {
  createCanvas(400, 400)
  loadImage("https://lgobvciqjnxkpfghvptz.supabase.co/storage/v1/object/public/assets/global/bird.png",'fly')
}

function draw() {
  background('black')
  image(assets['fly'],width/2,height/2,200,200)
  filterCanvas(INVERT)
  drawTickAxes()
}
