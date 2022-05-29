var towerImg, tower;
var doorImg, door, doorsGroup;

var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("obstacle4.png");
  
  ghostImg = loadImage("trex1.png");
  





}
function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost=createSprite(100,100,100,100)
ghost.addImage("ghost",ghostImg)
ghost.scale=0.4



doorsGroup=new Group()

invisibleBlockGroup=new Group()



}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

if(gameState="play"){
  if(keyDown("space")){
    ghost.velocityY=-2
  }
    
  if(ghost.isTouching(invisibleBlockGroup)){
gameState=end
  }

if(keyDown("Right")){
  ghost.velocityX=3
}
if(keyDown("Left")){
ghost.velocityX=-3
}

if(gameState="end"){
text("GAME OVER")
}

ghost.velocityY+=0.3  
doors()





}
drawSprites()
}


  
function doors(){
  if(frameCount%200==0){
    var door=createSprite(50,80,50,50)
door.addImage(doorImg)
door.velocityY=door.velocityY+5  
door.x=Math.floor(random(120,400))
doorsGroup.add(door)



invisibleBlock=createSprite(door.x, 120, 90,30)
invisibleBlock.velocityY=door.velocityY
invisibleBlockGroup.add(invisibleBlock)
invisibleBlockGroup.visible=false

}
}



