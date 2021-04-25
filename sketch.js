var shooter;
var target;
var bullet;
var edges;
var targetGrp;
var bulletGrp;
var gameState=2;
var shooterImg, targetImg, bulletImg, bgImg;
var song;
var score=0;
var die;





function preload(){

  shooterImg=loadImage("SpaceShip.png");
  bulletImg=loadImage("bullet.png");
  targetImg=loadImage("aliens.png");
  bgImg=loadImage("corona go.png");
  song= loadSound("corona.mp3");
  die=loadSound("die.wav");

  
}

function setup() {
  
  //die.loop();
   
  createCanvas(1000,500);
  

 
  shooter=  createSprite(450, 450, 50, 50);
  shooter.addImage(shooterImg);
  shooter.scale= 0.718246;  

  edges= createEdgeSprites();

  targetGrp= new Group();
  bulletGrp= new Group();

}


function draw() {
  background(bgImg);
  fill("blue");
  textSize(35);
  text("Corona killed: "+score, 700 , 130);


  if(gameState===2){
    console.log("hello");

    text("Press 'Spacebar' to Start the Game  ", 50, 100);
    text("If you can't hear the music, then refresh the page ", 50, 250);
    text("and spam 'Spacebar'  ", 50, 300);

    if(keyDown("Space")){
      song.loop();
      gameState=1;
    }

}





//}



if (gameState===1){
 // song.play();
shooter.velocityX=0;
shooter.velocityY=0;
targets();
if (keyDown("D")){
shooter.velocityX= 15;  
}
if (keyDown("A")){
shooter.velocityX= -15;
}
if (targetGrp.isTouching(edges[3])){
console.log("Error");
  gameState= 0;
  shooter.destroy();



}

if (keyDown("SPACE")){
if (frameCount%3===0){


   if (targetGrp.isTouching(bulletGrp)){

     targetGrp.destroyEach()
     bulletGrp.destroyEach()
  
   }



bullet= createSprite(shooter.x,shooter.y, 7, 7);
bullet.addImage(bulletImg);
bullet.scale= 0.05;
shooter.depth= bullet.depth+1;

bullet.velocityX=0;
bullet.velocityY=-15;


bulletGrp.add(bullet);





}
  }

if (targetGrp.isTouching(bulletGrp)){

score= score+1;
targetGrp.destroyEach();
bulletGrp.destroyEach();

console.log("Binod");

}

}

if (gameState===0){
  song.stop();

  textSize(35);
  fill("blue");
    text("You Get Corona ", 400, 250);
}


drawSprites();
}




function targets (){
if (frameCount%50===0){
target=  createSprite(Math.round(random(50,750)), 50, 50, 50);
target.addImage(targetImg);
target.scale=0.5;
target.velocityX=0;
target.velocityY=8  ;

targetGrp.add(target);





}
}
