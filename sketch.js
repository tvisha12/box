
//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;

var engine, world, ball, ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 

  ground = new Ground(400,390,800,20);
  box1 = new Box(220,100,50,90);
  box2 = new Box(200,50,40,60);

}

function draw() {
  background(12,10,22); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  ground.display();
}