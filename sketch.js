var player
var cellMate
var wall1, wall2, wall3, wall4

function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 70);
  cellMate = createSprite(400, 370, 50, 70)
  
  wall1 = createSprite(600, 200, 50, 500)
  wall2 = createSprite(200, 200, 50, 500)
  wall3 = createSprite(400, 390, 500, 50)
  wall4 = createSprite(400, 10, 500, 50)
  cellMate.velocityX = 3
cellMate.velocityY = -3

cellMate.shapeColor = "red"
}

function draw() {
  background(255,255,255); 
  if(keyDown("d")){
player.x = player.x+5

  }
  if(keyDown("a")){
player.x=player.x-5

  }
  if(keyDown("w")){
player.y = player.y-5

  }
if(keyDown("s")){
player.y=player.y+5

}
player.bounceOff(wall1)
player.bounceOff(wall2)
player.bounceOff(wall3)
player.bounceOff(wall4)

cellMate.bounceOff(wall1)
cellMate.bounceOff(wall2)
cellMate.bounceOff(wall3)
cellMate.bounceOff(wall4)

if(player.isTouching(cellMate)){
cellMate.velocityX = 0;
cellMate.velocityY = 0;
player.visible = false
cellMate.visible = false
textSize(20)
text("game over", 400,200)

}


  drawSprites();

}