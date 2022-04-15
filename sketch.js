var box 
function setup() {
  createCanvas(800,800);
box = createSprite(400, 400, 40, 40)
box.shapeColor = "blue"




}

function draw() 
{
  background(30);
drawSprites()

if(keyDown("right")){
box.x = box.x + 5
background("red")
}
}