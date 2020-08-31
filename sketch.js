var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite
var monkey = createSprite(200,380,20,50);
monkey.setAnimation("monkey");

//set collision radius for the trex
monkey.setCollider("circle",0,0,30);

//scale and position the monkey
monkey.scale = 0.1;
monkey.x = 50;



//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground1");
ground.x = ground.width /2;

var invisibleground = createSprite(200,380,400,20);
invisibleground.visible=false;


//create Obstacle and Cloud Groups
var stoneGroup = createGroup();
var bananaGroup = createGroup();

//place gameOver and restart icon on the screen

//ground.debug=true;
//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);



var SurvivalTime = 0;

function draw() {
  //set background to white
  background("white");
  //display score
 
 
  
stroke("black");
 textSize(20);
fill("black");
SurvivalTime=Math.ceil(frameCount/frameRate())
 text("SurvivalTime : " + SurvivalTime, 100, 50);
 

 
   if(gameState === PLAY){
    
    
    if(keyDown("space")) {
     monkey.velocityY=-10;
     
   } 
     
     
   }
     //jump when the space key is pressed
   
  monkey.collide(invisibleground);
  
    if(stoneGroup.isTouching(monkey)){
      playSound("jump.mp3");
      playSound("die.mp3");
    }

    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    //spawn the clouds
    spawnbanana();
  
    //spawn obstacles
    spawnstone();

  
  drawSprites();
}

function spawnstone() {
  if(World.frameCount % 60 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = -6
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    stone.setAnimation("stone");
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.15;
    stone.lifetime = 70;
    //add each obstacle to the group
   stoneGroup.add(stone);
  }
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var  banana = createSprite(400,320,40,10);
     banana.y = randomNumber(280,320);
    banana.setAnimation("banana");
     banana.scale = 0.05;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 134;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   bananaGroup.add( banana);
  }
  
}

