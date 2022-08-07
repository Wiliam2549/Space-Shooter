var bg;
var spaceShip;
var spaceShipImg;
var rounds;
var gameState = "serve";
var enemie;
var enemieImg;
var enemies;
var cd = 100;

function preload() {
  bg = loadImage("maxresdefault.jpg")
  spaceShipImg = loadAnimation("triangle.png");
  //enemieImg = loadImage("");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceShip = createSprite(windowWidth/2, windowHeight/2);
  spaceShip.addAnimation("triangle", spaceShipImg);
  spaceShip.shapeColor = "white";
  spaceShip.scale = 0.05;
}

function draw() {
  /*if(gameState == "serve") {
    background("white");
    text("you were traveling back to your home planet",windowWidth/2, windowHeight/2,)
  }*/

  background("black");

  spawn();

  aim(60);
  
  KeyPressed();
  drawSprites();
  console.log(cd);
  cd += 1;
}

function aim(x) {
  spaceShip.pointTo(mouseX, mouseY);
  spaceShip.rotation = spaceShip.rotation + 90;
}

function spawn() {
  var rand = Math.round(random(1, 4));
  switch(rand) {
    case 1: enemie = createSprite(-30, Math.round(random(0, windowHeight)));
    //console.log("case 1");
    break;
    case 2: enemie = createSprite(windowWidth + 30, Math.round(random(0, windowHeight)));
    //console.log("case 2");
    break;
    case 3: enemie = createSprite(random(0, windowWidth), -30);
    //console.log("case 3");
    break;
    case 4: enemie = createSprite(random(0, windowWidth, 0 - windowHeight), windowHeight + 30);
    //console.log("case 4");
    break;
  }
  enemie.pointTo(windowWidth/2, windowHeight/2);
  enemie.scale = 0.2;
  enemie.setSpeedAndDirection(2)
}

function KeyPressed() {
  if(keyIsDown(DOWN_ARROW) && cd > 100) {
    b1 = new Bullet(100, 100);
    b1.shoot(spaceShip.rotation);
    cd = 0;
  }
}