var bg, sleep, bath, eat, move, gym, brush, drink;
var astronaut;
var edges;

function preload() {
bg = loadImage("Images/iss.png");
sleep = loadAnimation("Images/sleep.png");
brush = loadAnimation("Images/brush.png");
gym = loadAnimation("Images/gym1.png", "Images/gym2.png", "Images/gym11.png", "Images/gym12.png");
eat = loadAnimation("Images/eat1.png", "Images/eat2.png");
bath = loadAnimation("Images/bath1.png", "Images/bath2.png");
drink = loadAnimation("Images/drink1.png", "Images/drink2.png");
move = loadAnimation("Images/move.png", "Images/move1.png");
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale = 0.1;
  edges = createEdgeSprites();
}

function draw() {
  background(bg);  
  drawSprites();
  astronaut.bounceOff(edges);
  textSize(20);
  fill("white");
  text("Instructions ", 20, 35);
  textSize(15);
  text("b = brushing ", 20, 55);
  text("g = gyming ", 20, 75);
  text("e = eating ", 20, 95);
  text("space = bathing ", 20, 115);
  text("d = drinking ", 20, 135);
  text("m = moving ", 20, 155);

  if(keyDown("b")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
  }
  if(keyDown("g")){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming")
  }
  if(keyDown("e")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.velocityX = 0.5
    astronaut.velocityY = 0.5
  }
  if(keyDown("space")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
  }
  if(keyDown("d")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking")
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving")
    astronaut.velocityX = 1
    astronaut.velocityY = 1
  }
}