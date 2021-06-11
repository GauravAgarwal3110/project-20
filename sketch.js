var bgImg;
var cat,catImg,catA,catImg2;
var mouse, mouseImg,mouseA,mouseImg2;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");

    catImg=loadAnimation("images/cat1.png");
    catA=loadAnimation("images/cat2.png","images/cat3.png");
    catImg2=loadAnimation("images/cat4.png");

    mouseImg=loadAnimation("images/mouse1.png");
    mouseA=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg2=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(900,700,10,100);
    cat.addAnimation("catSleeping",catImg);
    cat.scale=0.15;
    mouse=createSprite(200,670,10,100);
    mouse.addAnimation("mouseStanding",mouseImg);
    mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
if(mouse.x - cat.x < cat.width/2 + mouse.width/2
&& cat.x - mouse.x < cat.width/2 + mouse.width/2){
    
   mouse.addAnimation("mouseHappy",mouseImg2);
   mouse.changeAnimation("mouseHappy");
   cat.addAnimation("catHappy",catImg2);
   cat.changeAnimation("catHappy");
   cat.velocityX=0;
    
}
else if (cat.velocityX===0){
    cat.addAnimation("catSleeping");
    cat.changeAnimation("catSleeping");
    mouse.addAnimation("mouseStanding");
    mouse.changeAnimation("mouseStanding");
    
}
else{
    cat.addAnimation("catMoving");
    cat.changeAnimation("catMoving");
    mouse.addAnimation("mouseTeasing");
    mouse.changeAnimation("mouseTeasing");
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if( keyCode===LEFT_ARROW){
    cat.addAnimation("catMoving",catA);
    cat.changeAnimation("catMoving");
    cat.frameDelay=25;
    cat.velocityX=-4;

    mouse.addAnimation("mouseTeasing",mouseA);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;

}


}
