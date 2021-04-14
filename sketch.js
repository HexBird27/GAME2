var ninja, monster, tower, princess, bossMonster, ground;
var bground, bgroundIMG, ninjaIMG, ninjaIMG2;
function preload(){
bgroundIMG=loadImage("Images/background.jpg")
ninjaIMG=loadImage("Images/Screenshot_8.png")
}
function setup(){
    var canvas = createCanvas(displayWidth-25,displayHeight-200);
bground = createSprite(width/2,height/2)
bground.addImage(bgroundIMG)
bground.scale=3
ninja = createSprite(75,height-50,10,10)
ninja.addImage(ninjaIMG)
bground.velocityX = -4
}

function draw(){
    background(0);
drawSprites();
}