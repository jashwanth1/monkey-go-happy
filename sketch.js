var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}
function setup() {
  createCanvas(600,200);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,200,900,10);
  ground.velocityX=-9;
  ground.x = ground.width /2;
  console.log(ground.X);
 
  survivalTime=0;

}
function draw() {
 background("white");
 
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: "+ survivalTime, 100,50);
   
    if (ground.x < 0)
    {
      ground.x = ground.width/8;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }

  //add gravity
    monkey.velocityY = monkey.velocityY + 0.9
    
 
  
  spawnBananas();
  
  spawnObstacles();
 
  monkey.collide(ground);
  
 drawSprites(); 
}
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 190;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    
  }
}
 
function spawnObstacles() 
{
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.lifetime=16;
   obstacle.addAnimation("obstacle",obstacleImage);
   obstacle.velocityX=-3;
   obstacle.scale = 0.2;
   obstacle.lifetime = 190;

 }
}




