var floor1,floor2,floor3,floor4,floor5;
var door1,door2,door3,door4,door5;
var player,usb,usbI,cpu,cpuI,pc,pcI;
var border1,border2,border3,border4;
var laser1,laser2,laser3,laser4,laser5,laser6,laser7,box1,box2,bomb,mark;
var bombImg,doorImg,goldImg,cashImg,expoImg,boxImg;
var cash  = 0;
var money1,money2,money3,money4,money5,moneyImg;
function preload(){
  bombImg = loadImage("bomb.png")
  doorImg  = loadImage("door.png")
  goldImg = loadImage("gold.png")
  expoImg = loadImage("explotion.png")
  moneyImg = loadImage("cash.png")
  usbI = loadImage("usb.png");
  pcI = loadImage("pc.png")
  cpuI = loadImage("cpu.png")
  boxImg = loadImage("boxImg.png")
  
}

function setup(){
createCanvas(500,650);
//player
player = createSprite(100,100,20,20)
//floors-
floor1 = createSprite(60,100,750,10);
floor1.shapeColor = "black"
floor2 = createSprite(250,200,500,10);
floor2.shapeColor = "black"
floor3 = createSprite(250,320,500,10);
floor3.shapeColor = "black"
floor4 = createSprite(250,440,500,10);
floor4.shapeColor = "black"
floor5 = createSprite(250,580,500,10);
floor5.shapeColor = "black"
//borders
border1 = createSprite(30,5,2000,10)
border2 = createSprite(30,645,2000,10)
border3 = createSprite(2,300,10,2000)
border4 = createSprite(495,300,10,2000)
//doors-
door1 = createSprite(440,100,110,10)
door1.shapeColor = "red";
door2 = createSprite(15,150,10,90)
door2.addImage(doorImg);
door2.visible = false
door2.scale = 0.15
//laser
laser1 = createSprite(251,130,10,50);
laser1.shapeColor = "red";
laser1.velocityX = +25;
//4th floor 
laser2 = createSprite(100,395,10,40)
laser2.velocityY = -5
laser2.shapeColor = "green"
laser3 = createSprite(180,360,10,40)
laser3.velocityY = +5
laser3.shapeColor = "white"
laser4 = createSprite(260,395,10,40)
laser4.velocityY = -5
laser4.shapeColor = "orange"
//3rd floor 
laser5 = createSprite(103,260,50,10)
laser5.rotationSpeed = 7;

laser6 = createSprite(233,265,10,50)
laser6.rotationSpeed = -7;

laser7 = createSprite(330,260,50,10)
laser7.rotationSpeed = 8;

//boxes
box1 = createSprite(Math.round(random(150,210)),180,30,30)
box1.addImage(boxImg);
box1.scale = 0.15
//bomb
bomb = createSprite(50,50,20,20)
bomb.addImage(bombImg)
bomb.scale = 0.1
bomb.x = box1.x;
bomb.y = box1.y - 20;
//marker
mark = createSprite(80,190,10,30);
mark.shapeColor = "yellow";
//pc
usb = createSprite(445,385,30,30);
usb.addImage(usbI)
usb.scale = 0.1
//money
money1 = createSprite(310,120,10,10)
money1.addImage(moneyImg);
money1.scale = 0.05
money2 = createSprite(150,287,10,10)
money2.addImage(moneyImg);
money2.scale = 0.05
money3 = createSprite(230,220,10,10)
money3.addImage(moneyImg);
money3.scale = 0.05
money4 = createSprite(310,295,10,10)
money4.addImage(moneyImg);
money4.scale = 0.05
//money5 = createSprite(310,120,10,10)
//money5.addImage(moneyImg);
//money5.scale = 0.05
}

function draw(){
background("blue");
console.log(mouseX,mouseY)
player.collide(box1)
player.collide(floor1)
player.collide(floor2)
player.collide(floor3)
player.collide(floor4)
player.collide(floor5)
player.collide(door1)
player.collide(door2)
player.collide(border1)
player.collide(border2)
player.collide(border3)
player.collide(border4)
laser1.bounceOff(border3)
laser1.bounceOff(border4)
laser2.bounceOff(floor3)
laser2.bounceOff(floor4)
laser3.bounceOff(floor3)
laser3.bounceOff(floor4)
laser4.bounceOff(floor3)
laser4.bounceOff(floor4)


border1.visible = false;
border2.visible = false;
border3.visible = false;
border4.visible = false;

if(keyDown("LEFT_ARROW")){
  player.x = player.x - 10;
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 10;
}
if(keyDown("UP_ARROW")){
  player.velocityY = -10;
}
player.velocityY += 0.5;

if(keyDown("DOWN_ARROW")){
  player.y = player.y + 10;
}

if(player.isTouching(door1)){
  fill("red")
  textSize(20)
  text("Press O to open door",310,145)
}

if(player.isTouching(door1) && keyDown("O")){
  door1.width = 10;
  door1.height = 100
  door1.x = 440
  door1.y = 58
}

if(player.isTouching(door2)){
  player.x  =100
  player.y = 290 
}
if(player.isTouching(bomb)){
  bomb.visible = false;
  door2.visible = true
}

if(player.isTouching(mark)){
  fill("red")
  textSize(20)
  text("Press T to plant the bomb",210,145)
}

if(player.isTouching(mark) && keyDown("T")){
  bomb.x = 6
  bomb.y = 160
  bomb.visible = true
}

if(bomb.isTouching(door2)){
  textSize(20)
  fill("red")
  text("Press B To Blast",255,165)
}

if(bomb.isTouching(door2) && keyDown("B")){
 bomb.addImage(expoImg);
 bomb.scale = 0.2;
door2.lifetime = 10; 
bomb.lifetime = 10;
floor2.x =  300
}

/*if(laser1.isTouching(player)){
  player.x = 100
  player.y = 20
}*/

if(player.isTouching(money1)){
  //money1.visible = false
  cash = cash+100;
  money1.destroy();
}


drawSprites();
//texts 
fill("#00FF01")
textSize(20)
text("Cash:"+cash,30,15)



  
  
}
