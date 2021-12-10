const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, BGImg, tower, towerImg;
var canon;
var balls = [];

function preload() {
  BGImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width*2, 1, ground_options);
  World.add(world, ground);

  tower = Bodies.rectangle(150, 350, 160, 310, ground_options);
  World.add(world, tower);

  canon = new Canon(160, 110, 130, 100, 0);

  angleMode(DEGREES);

  angle = 15;
 
}

function draw() {
  
  image(BGImg, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, width*2, 1);

  push();

  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);

  pop();

  canon.display();

  for(var i = 0; i < balls.length; i++)
  {
    showCanonBalls(balls[i], i);
  }
   
}

function keyReleased()
{
  if(keyCode == DOWN_ARROW)
  {
    balls[balls.length - 1].shoot();
  }
}

function keyPressed()
{
  if(keyCode == DOWN_ARROW)
  {
    var canonBall;

    canonBall = new CanonBall(canon.x, canon.y);

    balls.push(canonBall);

  }
}

function showCanonBalls(ball, i)
{
  if(ball)
  {
    ball.display();
  }
}
