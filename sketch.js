var tom;
var jerry;
var tomRunning, jerryTeasing, tom1Image, tom2Image, jerry1Image, jerry2Image;
var forest, forestImage;

var STEADY, PLAY, END;
var gameState;

function preload() {
    tom1Image = loadImage("cat4.png");
    tom2Image = loadImage("cat1.png");
    tomRunning = loadAnimation("cat2.png", "cat3.png");
    jerry1Image = loadImage("mouse1.png");
    jerry2Image = loadImage("mouse4.png");
    jerryTeasing = loadAnimation("mouse2.png", "mouse3.png");
    forestImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(750, 700, 1, 1);
    jerry = createSprite(200, 700, 1, 1);
    forest = createSprite(1000, 800); 
}

function draw() {
    if(gameState === STEADY){
   tom.addImage(tom1Image);
   jerry.addImage(jerry1Image);
    }

    else if(keyDown("LEFT_ARROW")){
   gameState = PLAY;
   tom.changeAnimation("tom_chasing", tomRunning);
   jerry.changeAnimation("jerry_comedy", jerryTeasing);
}

else if(gameState === END){
    tom.changeAnimation("tom_sitting", tom2Image);
    jerry.changeAnimation("jerry_detecting", jerry2Image);
}

if(tom.x - jerry.x < (tom.width - jerry.width)/2){
tom.changeAnimation();
}

    drawSprites();
}