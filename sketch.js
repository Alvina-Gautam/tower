const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  
  block16 = new Block(390,155,30,40);

  block17 = new Block(625,175,30,40);
  block18 = new Block(655,175,30,40);
  block19 = new Block(685,175,30,40);
  block20 = new Block(715,175,30,40);
  block21 = new Block(745,175,30,40);
  block22 = new Block(775,175,30,40);
  
  block23 = new Block(655,135,30,40);
  block24 = new Block(685,135,30,40);
  block25 = new Block(715,135,30,40);
  block26 = new Block(745,135,30,40);

  block27 = new Block(685,95,30,40);
  block28 = new Block(715,95,30,40);

  shooter = new hexagon(100,230,25,25);
  slingshot = new SlingShot(shooter.body,{x:170, y:170});
}

function draw() {
  background(195, 33, 72); 
 
  textSize(20);
  fill("lightyellow");
  
  
  ground.display();
  fill(70, 27, 126)
  stand1.display();
  stand2.display();
  
  strokeWeight(1);
  stroke(15);
  
  fill(21, 125, 236);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill(102, 152, 255);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill(135, 206, 250);
  block13.display();
  block14.display();
  block15.display();
  
  fill(130, 202, 255);
  block16.display();

  fill(21, 125, 236);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  fill(102, 152, 255)
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  fill(135, 206, 250);
  block27.display();
  block28.display();

  shooter.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}