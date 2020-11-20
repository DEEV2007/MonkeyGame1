
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score,ground,stone;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup=new Group();
  obstacleGroup=new Group();
}



function setup() {
  createCanvas(600,600);

  monkey=createSprite(100,410,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  score=0;
  ground=createSprite(500,450,1200,20);
}


function draw() {
  background("lightblue")
  
  score=score+(frameCount%5)
  text("Srore: "+score,200,200);
  
  monkey.collide(ground);
  
  ground.velocityX=-5;
  if (ground.x<0){
  ground.x=450;  
  }
  
  if(keyDown("space")){
    monkey.velocityY=-6;
  }
  if (monkey.y<300){
    monkey.velocityY=monkey.velocityY+0.6;
  }
  
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.velocityX=0;
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    ground.velocityX=0;
    score=0;
  }
  
  spawnBanana();
  spawnStone();
  
  drawSprites();
}

function spawnBanana(){
  if (frameCount%80===0){
    banana=createSprite(600,280,20,20);
    banana.y=Math.round(random(280,320));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=300;
    FoodGroup.add(banana);
  }
}

function spawnStone(){
  if (frameCount%200===0){
  stone=createSprite(400,420,40,40);
  stone.addImage(obstaceImage);
  stone.scale=0.1;
  //stone.collide(ground);
  stone.velocityX=-2  ;
  stone.lifetime=200;
  obstacleGroup.add(stone);
  }
}