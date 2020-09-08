const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	ground = new Ground(400,height,800,15);

	paper = new Paper(50,300,20);

	dustbin = new Dustbin();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  paper.display();

  dustbin.display();

  keyPressed();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}