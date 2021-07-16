var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var pinkCG, redCG, yellowCG
var gameover; 

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  trafficconeImg = loadImage("images/obstacle1.png")
  holeImg = loadImage("images/obstacle2.png")
  nailsImg = loadImage("images/obstacle3.png")
  pinkOpponentImg = loadAnimation("images/opponent1.png","images/opponent2.png")
  pinkOpponentCryingImg  = loadImage("images/opponent3.png")
  yellowOpponentImg = loadAnimation("images/opponent4.png","images/opponent5.png");
  yellowOpponentCrying = loadImage("images/opponent6.png")
  redOpponentImg = loadAnimation("images/opponent7.png","images/opponent8.png")
  redOpponentCrying = loadImage ("images/opponent9.png")
  gameoverImg = loadImage ("images/gameOver.png")
  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -7;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  pinkCG = createGroup();
  redCG = createGroup();
  yellowCG = createGroup();
  gameover = createSprite(250,150,20,20);
  gameover.addImage(gameoverImg)
  gameover.visible = false
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  
var select_opp = Math.round (random(1,3))
if (World.frameCount%150===0){
  if (select_opp==1){
    pinkOpponent();
  }else if(select_opp==2){
    redOpponent();
  }
  else if (select_opp==3){
    yellowOpponent();
  }
} 
    if (mainCyclist.isTouching(pinkCG)||mainCyclist.isTouching(redCG)||mainCyclist.isTouching(yellowCG)){
      gameState = END
      path.velocityX = 0
      pinkCG.destroyEach();
      redCG.destroyEach();
      yellowCG.destroyEach();
      mainCyclist.destroy();
       gameover.visible = true
    }
  }
  distance = Math.round (frameCount/60)
  
}

function pinkOpponent(){
  var pinkOpponent = createSprite(500,Math.round(random(25,275), 10, 10))
  pinkOpponent.addAnimation("pink",pinkOpponentImg);
  pinkOpponent.velocityX = -7
  pinkOpponent.scale = 0.06
  pinkOpponent.setLifetime = 170;
  pinkCG.add(pinkOpponent)
  
  
}


function redOpponent(){
  var redOpponent = createSprite(500,Math.round(random(25,275), 10, 10))
  redOpponent.addAnimation("red",redOpponentImg);
  redOpponent.velocityX = -7
  redOpponent.scale = 0.08
  redOpponent.setLifetime = 170
  redCG.add(redOpponent)
  
  
  
}


function yellowOpponent(){
  var yellowOpponent = createSprite(500,Math.round(random(25,275), 10,10))
  yellowOpponent.addAnimation("yellow",yellowOpponentImg);
  yellowOpponent.velocityX = -7
  yellowOpponent.scale = 0.08
  yellowOpponent.setLifetime = 170
  yellowCG.add(yellowOpponent)
  
  
  
}