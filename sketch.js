var BackGround,Back_ground;
var B_Laser,G_Laser,R_Laser,O_Laser,Blast;
var alienGroup,alienShip1,alienShip2,alienShip3;
var Jet,jetImg;

function preload(){
  Blast = loadAnimation("Blast_(3).jpeg","Blast_(4).png","Blast_(5).png","Blast_(6).png","Blast_(7).png","Blast_(8).png","Blast_(9).png");
 
  jetImg = loadAnimation("jet1.png","jet2.png","jet3.png","jet4.png","jet5.png","jet6.png","jet7.png","jet8.png","jet9.png","jet10.png");

  alienShip1 = loadImage("Aliens1.png");
  alienShip2 = loadImage("Aliens2.png");
  alienShip3 = loadImage("Aliens3.png");
  alienGroup = new Group();

  B_Laser = loadImage("BlueLaser.png");
  G_Laser = loadImage("GreenLaser.png");
  R_Laser = loadImage("RedLaser.png");
  O_Laser = loadImage("OrangeLaser.png");

  Back_ground = loadImage("background.png");
 
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  BackGround=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  BackGround.addImage(Back_ground);
  BackGround.velocityY = +4;

  Jet = createSprite(displayWidth/2,600,100,100);
  Jet.addAnimation("jet",jetImg);
  Jet.scale = 0.08;
 
}
function draw(){

if(BackGround.y > displayHeight*3){
  BackGround.y = displayHeight/2;
}
  aliens();

 Jet.x = mouseX;

 
 

  drawSprites();
}

function aliens(){
 
  if (frameCount % 100 === 0) {
    var Aliens = createSprite(random(200, 900), 0, 100, 100);
    Aliens.velocityY = 4;
    Aliens.scale = 0.2;
   // Alien.lifeTime(1000);
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: Aliens.addImage("alien1",alienShip1);
        break;
        case 2: Aliens.addImage("alien2",alienShip2);
        break;
        case 3: Aliens.addImage("alien3",alienShip3);
        break;
       
    }
    alienGroup.add(Aliens);
    
}
}


