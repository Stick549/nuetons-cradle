
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box, bob1, bob2, bob3, bob4, bob5;
var chain, chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	box = new Box(400, 75, 700, 75, PI/2)
	bob1 = new Ball(400, 475, 100, 100)
	bob2 = new Ball(350, 475, 100, 100)
	bob3 = new Ball(300, 475, 100, 100)
	bob4 = new Ball(450, 475, 100, 100)
	bob5 = new Ball(500, 475, 100, 100)
	chain = new Chain(bob1.body, {x:400, y:75})
	chain2 = new Chain(bob2.body, {x:300, y:75})
	chain3 = new Chain(bob3.body, {x:200, y:75})
	chain4 = new Chain(bob4.body, {x:500, y:75})
	chain5 = new Chain(bob5.body, {x:600, y:75})
	Matter.Body.setStatic(box.body, true);
	Matter.Body.setStatic(bob1.body, false);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display()
  bob1.display() 
  bob2.display() 
  bob3.display() 
  bob4.display() 
  bob5.display() 
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  if (keyIsDown(UP_ARROW)){
	Matter.Body.applyForce(bob5.body, bob5.body.position, {x:35, y:0})
  }
}



